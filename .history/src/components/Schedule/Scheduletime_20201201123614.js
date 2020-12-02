import React from 'react'
import {graphql,StaticQuery} from 'gatsby'

const Scheduletime = () => (
    
  <StaticQuery
    query={graphql`
      {
        allWordpressWpSchedule(sort: {fields: id, order: ASC}) {
            edges {
            node {
                acf {
                schedule_day
                schedule_date
                coffee_time
                coffee_title {
                    coffee_text
                }
                }
            }
            }
        }
      }
    `}


    render={props => (
      <>
        

        <section className="schedule-table-section spad">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="schedule-table-tab">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">Marketing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Business</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">Technology</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#tabs-4" role="tab">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#tabs-5" role="tab">Event</a>
                        </li>
                    </ul>
                    
                    
          {props.allWordpressWpSchedule.edges.map(items => (
                    
                    
                    <div className="tab-content">
                        <div className="tab-pane active" id="tabs-1" role="tabpanel">
                            <div className="schedule-table-content">
                                <table>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>
                                                <strong>{items.node.acf.schedule_day}</strong>
                                                <span>{items.node.acf.schedule_date}</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="event-time">{items.node.acf.coffee_time}</td>
                                            <td className="break hover-bg" key={items.coffee_text}>
                                            {props.allWordpressWpSchedule.edges.coffee_title.map(itemmenu => (
                                                
                                                    
                                                <h5>{itemmenu.coffee_text}</h5>
                                                    
                                               
                                            ))}
                                                {/* <h5>{items.node.acf.coffee_title.coffee_text}</h5> */}
                                            </td>
                                            
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>


            ))}


                </div>
            </div>
        </div>
    </div>
</section>
        
                
      </>
    )}
  />
)
export default Scheduletime