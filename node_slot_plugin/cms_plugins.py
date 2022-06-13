from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool
from cms.models.pluginmodel import CMSPlugin
from django.utils.translation import gettext_lazy as _

from .models import NodeSlotPluginModel

class NodeSlotPlugin(CMSPluginBase):
    # name = u'Node Slot'
    name = _("Node Slot")
    model = NodeSlotPluginModel
    render_template = "_node_slot_plugin.html"
    allow_children = False
    module = "Quest Engine"

    def render(self, context, instance, placeholder):
        context = super().render(context, instance, placeholder)
        return context

plugin_pool.register_plugin(NodeSlotPlugin)