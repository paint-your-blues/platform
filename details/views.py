from django.views.generic import TemplateView

# Create your views here.


class AboutPageView(TemplateView):
    template_name = 'details/about.html'

