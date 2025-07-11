import Cards from "../../components/Cards/Cards";
import ArchiveAccess from '../../components/ArchiveAccess/ArchiveAccess'

function StationsPage() {
  return (
    <>
      <section className="stations-page">
        <Cards />
        <ArchiveAccess />
      </section>
    </>
  );
}

export default StationsPage;