import { getModelForClass } from '@typegoose/typegoose';
import { ListingClass } from '../../entities/listing';

export const Listing = getModelForClass(ListingClass, {
    schemaOptions: { collection: 'Listings' },
});
