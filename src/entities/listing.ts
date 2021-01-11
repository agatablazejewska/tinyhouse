import { mongoose, prop as Property } from '@typegoose/typegoose';
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType({ description: 'The Listings model' })
export class ListingClass {
    @Field(() => ID)
    _id: mongoose.Types.ObjectId;

    @Field()
    @Property({ required: true })
    address: string;

    @Field()
    @Property({ required: true })
    image: string;

    @Field()
    @Property({ required: true })
    numOfBaths: number;

    @Field()
    @Property({ required: true })
    numOfBeds: number;

    @Field()
    @Property({ required: true })
    numOfGuests: number;

    @Field()
    @Property({ required: true })
    price: number;

    @Field()
    @Property({ required: true })
    rating: number;

    @Field()
    @Property({ required: true })
    title: string;
}
