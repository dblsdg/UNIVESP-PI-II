from django import forms
from django.core.mail.message import EmailMessage

from .models import Produto


class ContatoForm(forms.Form):
    name = forms.CharField(label='Nome', max_length=100)
    email = forms.CharField(label='E-mail', max_length=100)
    subject = forms.CharField(label='Assunto', max_length=120)
    message = forms.CharField(label='Mensagem', widget=forms.Textarea())

    def send_mail(self):
        name = self.cleaned_data['name']
        email = self.cleaned_data['email']
        subject = self.cleaned_data['subject']
        message = self.cleaned_data['message']
        content = f'Nome: {name}\nE-mail: {email}\nAssunto: {subject}\nMensagem: {message}'

        mail = EmailMessage(
            subject='E-mail enviado pelo sistema django2',
            body=content,
            from_email='contato@seudominio.com.br',
            to=['contato@seudominio', 'priheuko@yahoo.com.br', 'dblsdg@gmail.com'],
            headers={'Reply-To': email}
        )
        mail.send()


class ProdutoModelForm(forms.ModelForm):
    class Meta:
        model = Produto
        fields = ['product_name', 'price', 'stock', 'image']
