import getBillboard from '@/actions/get-billboard';
import Billboard from '@/components/billboard';
import Container from '@/components/ui/container';
import React from 'react';

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard('492196c2-96ce-4c9b-aebb-e8db38010655');
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};

export default HomePage;
