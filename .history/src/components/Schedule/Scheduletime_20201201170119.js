import React from 'react'
import {graphql,StaticQuery} from 'gatsby'

const Scheduletime = () => (
    
  <StaticQuery
    query={graphql`
      {
        allWordpressWpSchedule(sort: {fields: id, order: ASC}) {
    edges {
      node {
        title
        acf{
          event_schedule{
            schedule_title
            schedule_time
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
                                                <strong>{items.node.title}</strong>
                                                <span></span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td className="event-time">{items.node.acf.event_schedule.schedule_title}</td>
                                            <td className="break hover-bg">
                                                <h5>{items.node.acf.event_schedule.schedule_time}</h5>
                                            </td>
                                        </tr>
                                        {/* <tr>
                                            <td className="event-time">{items.node.acf.marketing_time}</td>
                                                <td className="hover-bg">
                                                    <h5>{items.node.acf.marketers_name.market_name}</h5>
                                                    <p><span>By</span> {items.node.acf.marketers_name.market_text}</p>
                                                </td>
                                        </tr>
                                        <tr>
                                            <td className="event-time">{items.node.acf.technology_time}</td>
                                                <td className="hover-bg">
                                                    <h5>{items.node.acf.techno_field.tech_name}</h5>
                                                    <p><span>By</span> {items.node.acf.techno_field.tech_time}</p>
                                                </td>
                                        </tr>
                                        <tr>
                                            <td className="event-time">{items.node.acf.talk_time}</td>
                                                <td className="hover-bg">
                                                    <h5>{items.node.acf.talking_life.talking_life_name}</h5>
                                                    <p><span>By</span> {items.node.acf.talking_life.talking_life_text}</p>
                                                </td>
                                        </tr> */}
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