import CustomerDashboard from '../../components/pages/CustomerDashboard';

export const metadata = {
  title: 'Client Dashboard - Trygon',
  description: 'Track your projects, view invoices, and communicate with the Trygon team through your personalized dashboard.',
};

export default function Dashboard() {
  return <CustomerDashboard />;
}