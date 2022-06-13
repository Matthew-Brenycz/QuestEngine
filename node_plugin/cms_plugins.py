from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool
from cms.models.pluginmodel import CMSPlugin
from django.utils.translation import gettext_lazy as _

from .models import NodePluginModel

class NodePlugin(CMSPluginBase):
    name = _("Node")
    model = NodePluginModel
    render_template = "_node_plugin.html"
    allow_children = True
    cache = False
    module = "Quest Engine"

    def render(self, context, instance, placeholder):
        context = super().render(context, instance, placeholder)
        return context

plugin_pool.register_plugin(NodePlugin)
