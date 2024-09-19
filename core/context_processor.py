from django.conf import settings


def api_url_processor():
    return {
        # Adiciona a URL da API no contexto dos templates
        'API_URL': settings.API_URL
    }
