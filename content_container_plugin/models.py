
from django.db import models
from datetime import datetime, timezone

from cms.models.pluginmodel import CMSPlugin

from djangocms_attributes_field.fields import AttributesField

class ContentContainerPluginModel(CMSPlugin):

    node_title = models.CharField(max_length=50, default="Content Container")

