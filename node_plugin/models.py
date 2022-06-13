
from django.db import models
from datetime import datetime, timezone
import uuid

from cms.models.pluginmodel import CMSPlugin

from djangocms_attributes_field.fields import AttributesField

class NodePluginModel(CMSPlugin):

    node_title = models.UUIDField(default=uuid.uuid4, unique=True)
