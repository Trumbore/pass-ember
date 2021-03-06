import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.get('store').findRecord('grant', params.grant_id,
      { include: 'submissions' });
  }
});
