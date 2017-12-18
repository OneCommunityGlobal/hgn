import DS from 'ember-data';

export default DS.Model.extend({

  model(){
    return {
      barChart:[
        {
            name: 'Joe',
            value: 60,
            color: '#E91E63'
          },
          {
            name: 'Anne',
            value: 40,
            color: '#43A047'
          },
          {
            name: 'Kate',
            value: 30,
            color: '#E91E63'
          },
          {
            name: 'Priti',
            value: 50,
            color: '#9C27B0'
          },
          {
            name: 'Sowmya',
            value: 45,
            color: '#039BE5'
          },
          {
            name: 'Beena',
            value: 35,
            color: '#FFB300'
          },

          ].sortBy('value'),

        }

      }

});
