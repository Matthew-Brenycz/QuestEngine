from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool
from cms.models.pluginmodel import CMSPlugin
from django.utils.translation import gettext_lazy as _

from .models import ContentContainerPluginModel

class ContentContainerPlugin(CMSPluginBase):
    name = _("Content Container")
    model = ContentContainerPluginModel
    render_template = "_content_container_plugin.html"
    allow_children = True
    module = "Quest Engine"
    cache = False

    def render(self, context, instance, placeholder):
        context = super().render(context, instance, placeholder)
        return context

plugin_pool.register_plugin(ContentContainerPlugin)
