import { DocumentType, mongoose } from '@typegoose/typegoose';
import { Arg, Ctx, ID, Mutation, Query, Resolver, Root } from 'type-graphql';
import { ListingClass } from '../entities/listing';
import { Listing } from '../database/models/listing';

@Resolver(Listing)
export class ListingResolver {
    @Query(() => [ListingClass])
    async listings(
        @Ctx() context: { listing: typeof Listing }
    ): Promise<DocumentType<ListingClass>[]> {
        return await context.listing.find({}).exec();
    }

    @Mutation(() => ID)
    async deleteListing(
        @Root() _root: undefined,
        @Arg('id', (type) => ID) id: mongoose.Types.ObjectId,
        @Ctx() context: { listing: typeof Listing }
    ): Promise<mongoose.Types.ObjectId> {
        const deleteResult = await context.listing.findByIdAndRemove(id);

        if (!deleteResult) {
            throw new Error(`Failed to delete the listing`);
        }

        return deleteResult._id;
    }
}
