import getRegions from '@/actions/get-regions';
import getColors from '@/actions/get-colors';
import getMakes from '@/actions/get-makes';
import getBodyTypes from '@/actions/get-body-types';
import CarForm from '@/components/car-form';
import getCategories from '@/actions/get-categories';

const createNewAdPage = async ({
  params,
}: {
  params: { productId: string; storeId: string };
}) => {
  const product = null;
  const categories = await getCategories();
  const bodyTypes = await getBodyTypes();
  const makes = await getMakes();
  const colors = await getColors();
  const regions = await getRegions();

  return (
    <div className="max-w-screen-2xl m-auto">
      <div className="flex-1 space-y-4 p-8 pt-0">
        <CarForm
          initialData={product}
          categories={categories}
          bodyTypes={bodyTypes}
          makes={makes}
          colors={colors}
          regions={regions}
        />
      </div>
    </div>
  );
};

export default createNewAdPage;
