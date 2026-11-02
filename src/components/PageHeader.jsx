export default function PageHeader({ icon: Icon, title, lede, color = 'orange' }) {
  return (
    <header className={`phead phead--${color}`}>
      <div className="phead__shapes" aria-hidden="true"><i /><i /><i /></div>
      <div className="wrap phead__in">
        {Icon && <span className="phead__icon"><Icon size={28} strokeWidth={2} /></span>}
        <h1>{title}</h1>
        {lede && <p className="lede">{lede}</p>}
      </div>
    </header>
  )
}
