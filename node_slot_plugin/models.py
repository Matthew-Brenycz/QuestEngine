
from django.db import models
from datetime import datetime, timezone
import uuid

from cms.models.pluginmodel import CMSPlugin

from djangocms_attributes_field.fields import AttributesField


class NodeSlotPluginModel(CMSPlugin):

    # node_slot_title = models.CharField(max_length=50, default="Node Slot")
    # slot_id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    node_slot_title = models.UUIDField(default=uuid.uuid4, unique=True)
    # node_something = models.CharField(default="Guest", max_length=50)
    # node_slot_title = models.DateTimeField(default=datetime.now, editable=False, unique=True)