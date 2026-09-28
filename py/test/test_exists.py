# CloudflareCloudforceOne SDK exists test

import pytest
from cloudflarecloudforceone_sdk import CloudflareCloudforceOneSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = CloudflareCloudforceOneSDK.test(None, None)
        assert testsdk is not None
