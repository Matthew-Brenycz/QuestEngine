from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool
from cms.models.pluginmodel import CMSPlugin
from django.utils.translation import ugettext_lazy as _

from .models import Category, CategoryExtension
from cms.models import Title

class TableOfContentsPlugin(CMSPluginBase):
    model = CMSPlugin
    name = _("Table of Contents")
    render_template = "_TOC_plugin.html"
    cache = False
    allow_children = False
    module = "Quest Engine"

    def render(self, context, instance, placeholder):
      locations = []
      npcs = []
      items = []
      lore = []
      node_diagrams = []
      revelation_lists = []
      for t in Title.objects.all():
        if t.page.in_navigation==True and t.page.publisher_is_draft==False:
          try:
            if str(t.page.categoryextension.category) == 'Locations':
              anchor = (t.title,t.path)
              locations.append(anchor)
            if str(t.page.categoryextension.category) == 'NPCs':
              anchor = (t.title,t.path)
              npcs.append(anchor)
            if str(t.page.categoryextension.category) == 'Items':
              anchor = (t.title,t.path)
              items.append(anchor)
            if str(t.page.categoryextension.category) == 'Lore':
              anchor = (t.title,t.path)
              lore.append(anchor)
            if str(t.page.categoryextension.category) == 'Node_Diagrams':
              anchor = (t.title,t.path)
              node_diagrams.append(anchor)
            if str(t.page.categoryextension.category) == 'Revelation_Lists':
              anchor = (t.title,t.path)
              revelation_lists.append(anchor)
          except:
            pass

      context['Locations'] = locations
      context['NPCs'] = npcs
      context['Items'] = items
      context['Lore'] = lore
      context['Node_Diagrams'] = node_diagrams
      context['Revelation_Lists'] = revelation_lists
      return context
plugin_pool.register_plugin(TableOfContentsPlugin)