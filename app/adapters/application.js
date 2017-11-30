import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import isEnabled from 'ember-data/-private/features';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
    namespace: 'api',
    authorizer: 'authorizer:oauth2',
    host: 'http://localhost:4500',
    updateRecord(store, type, snapshot) {
    if (isEnabled('ds-improved-ajax') && !this._hasCustomizedAjax()) {
      return this._super(...arguments);
    } else {
      let data = {};
      let serializer = store.serializerFor(type.modelName);

      serializer.serializeIntoHash(data, type, snapshot, { includeId: true });

      let url = this.buildURL(type.modelName, snapshot.id, snapshot, 'updateRecord');

      return this.ajax(url, "PUT", { data: data });
    }
  }
});