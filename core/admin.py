from django.contrib import admin

from .models import Produto


# Register your models here.
@admin.register(Produto)
class ProdutoAdmin(admin.ModelAdmin):
    list_display = ('product_name', 'price', 'stock', 'slug', 'created_date', 'last_updated_date', 'is_active')
