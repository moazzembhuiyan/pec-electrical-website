import { generateCanonical } from '@/lib/seo';
import { fetchServiceDetails } from '@/Hooks/UsegetServiceDetails';
import ServiceDetailsContainer from './_Component/ServiceDetailsContainer';

export async function generateMetadata({ params }) {
  const { urlHandler } = await params;

  const canonical = generateCanonical(`/services/${urlHandler}`);

  try {
    const service = await fetchServiceDetails(urlHandler);

    return {
      title: service?.data?.metaTitle || 'Service Details',
      description:
        service?.data?.metaDescription ||
        'Discover detailed information about our electrical services, tailored to meet your residential and commercial needs with expertise and reliability.',

      alternates: {
        canonical,
      },

      robots: {
        index: true,
        follow: true,
      },
    };
  } catch (error) {
    return {
      title: 'Service Details - PEC Electrical',
      description:
        'Discover detailed information about our electrical services, tailored to meet your residential and commercial needs with expertise and reliability.',

      alternates: {
        canonical,
      },

      robots: {
        index: true,
        follow: true,
      },
    };
  }
}

export default async function ServiceDetailsPage({ params }) {
  const { urlHandler } = await params;

  let service = null;
  let error = null;

  try {
    service = await fetchServiceDetails(urlHandler);
  } catch (err) {
    error = err.message;
  }

  return (
    <div>
      <ServiceDetailsContainer initialService={service} id={service?.data?._id} error={error} />
    </div>
  );
}
