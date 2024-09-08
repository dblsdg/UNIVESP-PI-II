from django.urls import path
from .views import index, sobre, servicos, contato, cadastro, login_view, produto, lista_produtos

urlpatterns = [
    path('', index, name='index'),
    path('sobre/', sobre, name='sobre'),
    path('serviços/', servicos, name='serviços'),
    path('contato/', contato, name='contato'),
    path('cadastro/', cadastro, name='cadastro'),
    path('login/', login_view, name='login'),
    path('produto/', produto, name='produto'),
    path('listaProdutos/', lista_produtos, name='listaProdutos')
]
