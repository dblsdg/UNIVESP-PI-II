from django.db import models
from stdimage.models import StdImageField


# signals
from django.db.models import signals
from django.template.defaultfilters import slugify


class Base(models.Model):
    created_date = models.DateTimeField('Data de Criação', auto_now_add=True)
    last_updated_date = models.DateTimeField('Data da Última Atualização', auto_now=True)
    is_active = models.BooleanField('Ativo?', default=True)

    class Meta:
        abstract = True


class Produto(Base):
    product_name = models.CharField('Nome', max_length=100)
    price = models.DecimalField('Preço', decimal_places=2, max_digits=8)
    stock = models.IntegerField('Estoque')
    image = StdImageField('Imagem', upload_to='produtos', variations={'thumb': (124, 124)})
    slug = models.SlugField('Slug', max_length=100, blank=True, editable=False)

    def __str__(self):
        return self.product_name


def produto_pre_save(signal, instance, sender, **kwargs): instance.slug = slugify(instance.nome)


signals.pre_save.connect(produto_pre_save, sender=Produto)
