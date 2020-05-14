from django.views.generic import TemplateView


# Create your views here.
class EntryPageView(TemplateView):
    template_name = 'gallery/entry.html'
