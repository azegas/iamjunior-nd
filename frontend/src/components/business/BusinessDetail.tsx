import { useParams } from 'react-router-dom';
import Loading from '@/components/common/Loading';
import Error from '@/components/common/Error';
import styles from './BusinessDetail.module.scss';
import '@/styles/global.scss';
import Container from '@/components/common/Container';
import { useQuery } from '@tanstack/react-query';
import fetchBusiness from '@/api/fetchBusiness';
import fetchBusinessesByCategory from '@/api/fetchBusinessesByCategory';
import BusinessCardSidebar from './BusinessCardSidebar';
import BookingPanel from '@/components/booking/BookingPanel';
import { useState } from 'react';
import { useUser } from '@/context/UserContext';

const BusinessDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useUser() ?? {};
  const [showBookingPanel, setShowBookingPanel] = useState(false);

  const {
    data: business,
    isLoading: isLoadingBusiness,
    error: errorsBusiness,
  } = useQuery({
    queryKey: ['business', id],
    queryFn: () => fetchBusiness(id ?? ''),
    staleTime: Infinity, // Do not refetch business
  });

  const {
    data: businesses,
    isLoading: isLoadingBusinesses,
    error: errorsBusinesses,
  } = useQuery({
    queryKey: ['businesses', business?.category?.name],
    queryFn: () => fetchBusinessesByCategory(business?.category?.name ?? ''),
  });

  if (isLoadingBusiness || isLoadingBusinesses) return <Loading />;

  if (errorsBusiness || errorsBusinesses) {
    if (Array.isArray(errorsBusiness)) {
      return <Error message={errorsBusiness[0].message} />;
    } else {
      return <Error message={errorsBusiness?.message ?? ''} />;
    }
  }

  if (business) {
    return (
      <Container>
        <div className={styles.businessDetail}>
          <div className={styles.businessImage}>
            <img
              src={
                business.images?.[0] ||
                'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/200px-No-Image-Placeholder.svg.png?20200912122019'
              }
              alt={business.name}
            />
          </div>
          <div className={styles.details}>
            <p className={styles.category}>{business.category?.name || 'Category not available'}</p>
            <h1 className={styles.title}>{business.name}</h1>
            <p className={styles.name}>{business.worker || 'Contact person not available'}</p>

            <p className={styles.field}>
              <img
                src="https://img.icons8.com/?size=100&id=3723&format=png&color=000000"
                height={20}
              />
              {business.address || 'Address not available'}
            </p>
            <p className={styles.field}>
              <img
                src="https://img.icons8.com/?size=100&id=12580&format=png&color=000000"
                height={20}
              />
              {business.email || 'Email not available'}
            </p>
          </div>
          <div className={styles.contact}>
            <p
              className="globalButton"
              // on mobile we want to share to other apps, and on windows we want to copy the url
              onClick={() => {
                if (window.innerWidth < 768) {
                  navigator.share({ url: window.location.href });
                } else {
                  navigator.clipboard.writeText(window.location.href).then(() => {
                    alert('URL copied to clipboard, you can share it with your friends now!');
                  });
                }
              }}
            >
              <img
                src="https://img.icons8.com/?size=100&id=58564&format=png&color=FFFFFF"
                height={20}
              />
            </p>
            {user && (
              <>
                <p className="globalButton" onClick={() => setShowBookingPanel(!showBookingPanel)}>
                  Book appointment with {business.worker.split(' ')[0]}
                </p>
                {showBookingPanel && (
                  <BookingPanel
                    businessId={id ?? ''}
                    show={showBookingPanel}
                    onClose={() => setShowBookingPanel(false)}
                  />
                )}
              </>
            )}
          </div>
        </div>

        <div className={styles.descriptionSidebar}>
          <div className={styles.description}>
            <p className={styles.title}>Description:</p>
            {business.description || 'Description not available'}
            <div className={styles.gallery}>
              {business.images?.map((image) => <img key={image} src={image} alt={business.name} />)}
            </div>
          </div>
          <div className={styles.sidebar}>
            <p className={styles.title}>Similar Businesses</p>
            {businesses && businesses.length > 1 ? (
              businesses
                .filter((b) => b._id !== business._id)
                .map((business) => <BusinessCardSidebar key={business._id} business={business} />)
            ) : (
              <p>There are no other businesses of category "{business?.category?.name}".</p>
            )}
          </div>
        </div>
      </Container>
    );
  }

  return null;
};

export default BusinessDetail;
