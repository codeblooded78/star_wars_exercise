import React from 'react'

export const DashboardView = ({
                                  searchHandler,
                                  planetData,
                                  logoutHandle
                              }) => {

    const buildPlanet = () => {
        return planetData.map((val, key) => {
            const class_Name = (!!val.population && val.population <= 200000) ? 'big' : ''
            return (
                <li key={key}>
                    <div className={`card_blk ${class_Name}`}>
                        <span> {val.name}</span>
                        <p>Population:{val.population} Climate:{val.climate} Gravity:{val.gravity}</p>
                    </div>
                </li>
            )
        })
    }

    return (
        <React.Fragment>
            <header className="align-items-center bg-dark d-flex justify-content-between p-3 text-white">
                <div className="">Search for lost Planets</div>
                <div className="">
                    <button className="btn btn-danger" onClick={()=>{logoutHandle()}}>Logout</button>
                </div>
            </header>
            <div className="container py-5 px-3">
                <input type="text"
                       className="form-control"
                       placeholder={'Search for a planet'}
                       onKeyUp={(event) => {
                           searchHandler(event.target.value)
                       }}


                />
                <ul className="list-unlisted">
                    {
                        buildPlanet()
                    }
                </ul>
            </div>
        </React.Fragment>
    )

}