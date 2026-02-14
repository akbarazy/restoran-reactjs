import Spinner from './components/shared/Spinner';

function Layout({ children, loading }) {
  return (
    <div className='container-xxl bg-white p-0'>
      <Spinner show={loading} />
      {!loading && children}
    </div>
  );
}

export default Layout;
