export async function getServerSideProps() {
  return {
    redirect: {
      destination: 'products/smart-managed-pools',
      permanent: true,
    },
  };
}
