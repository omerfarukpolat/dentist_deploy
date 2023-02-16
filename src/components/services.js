import {Navigation} from "./navigation";

export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Dentics Hizmetlerimiz</h2>
        </div>
        <div>
          {props.data
            ? props.data.map((d, i) => (
                <div className={'hover01'}>
                <div key={`${d.name}-${i}`} className='col-md-3 hover01'>
                  <i className={d.icon}></i>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                  </div>
                </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
