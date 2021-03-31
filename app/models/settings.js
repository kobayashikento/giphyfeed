import Model, { attr } from '@ember-data/model';

export default class SettingsModel extends Model {
    // website title
    @attr title;
    // type of api request, i.e. trending, random, etc
    @attr type; 
    // number of records to return
    @attr limit;
    // filter based on rating i.e. g/pg/pg-13/r
    @attr rating;
}