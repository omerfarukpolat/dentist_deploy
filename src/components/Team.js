import {Link} from "react-router-dom";

export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Hekimlerimiz</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className='col-md-3 col-sm-6 team'>
                    <figure>
                      <div className='thumbnail hover01 img-responsive'>
                        {' '}
                        <Link to="/doctors">
                          <img src={d.img} alt='...'/>
                        </Link>
                        <div className='caption' style={{marginTop: 20}}>
                        </div>
                      </div>
                    </figure>
                    <h4>{d.name}</h4>
                    <p>{d.description}</p>
                  </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
