import './SkeletonTicket.scss';

export const SkeletonTicket = () => {
  return (
    <div className="Ticket Ticket--skeleton" aria-hidden="true">
      <div className="Ticket__header">
        <div className="skeleton skeleton--price" />
        <div className="skeleton skeleton--logo" />
      </div>
      <div className="Ticket__footer">
        <div className="Ticket__details">
          <div className="skeleton skeleton--text" />
          <div className="skeleton skeleton--text small" />
        </div>
        <div className="Ticket__details">
          <div className="skeleton skeleton--text" />
          <div className="skeleton skeleton--text small" />
        </div>
        <div className="Ticket__details">
          <div className="skeleton skeleton--text" />
          <div className="skeleton skeleton--text small" />
        </div>
      </div>
    </div>
  );
}
