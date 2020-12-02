import React from 'react'
import {graphql,Link,StaticQuery} from 'gatsby'


const Scheduletime = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpSchedule(sort: { fields: id, order: ASC }) {
          edges {
            node {
              id
              slug
              title
              acf {
                event_schedule {
                  schedule_time
                  schedule_title
                }
              }
              categories {
                id
                name
                slug
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
                    {props.allWordpressWpSchedule.edges.map((ttttt,index) => (
                      <li className="nav-item" key={ttttt.id}>
                        
                        <Link to={`/${ttttt.node.categories[index].slug}`} className="nav-link" activeclassName="active" data-toggle="tab" role="tab">
                          {ttttt.node.categories[index].name}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* {props.allWordpressWpSchedule.edges.map((items,index) => (
                    <div className="tab-content">
                      <div
                        className="tab-pane active"
                        id="tabs-1"
                        role="tabpanel"
                      >
                        <div className="schedule-table-content">
                          <table>
                            <thead>
                              <tr>
                                <th></th>
                                <th>
                                  <strong>{items.node.title}</strong>
                                  <span>{items.node.acf.event_schedule[index].schedule_time}</span>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {props.allWordpressWpSchedule.edges.map((ddd,index) => (
                                <tr>
                                  <td className="event-time">
                                    {ddd.node.acf.event_schedule[index].schedule_time}
                                  </td>
                                  <td className="break hover-bg">
                                    <h5>{ddd.node.acf.event_schedule[index].schedule_title}</h5>
                                  </td>
                                </tr>
                              ))}
                              
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  ))} */}
                  <div className="tab-content">
    <div className="tab-pane active" id="tabs-1" role="tabpanel">
        <div className="schedule-table-content">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>
                            <strong>Day 1</strong>
                            <span>May 09, 2019</span>
                        </th>
                        <th>
                            <strong>Day 2</strong>
                            <span>May 11, 2019</span>
                        </th>
                        <th>
                            <strong>Day 3</strong>
                            <span>May 12, 2019</span>
                        </th>
                        <th>
                            <strong>Day 4</strong>
                            <span>May 14, 2019</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                {props.allWordpressWpSchedule.edges.map(item => ({
                    <tr>
                      <td>fdgfd</td>
                    </tr>
                }))}
                    <tr>
                        <td className="event-time">10:00</td>
                        <td className="break hover-bg">
                            <h5>Coffee Break</h5>
                        </td>
                        <td className="break hover-bg">
                            <h5>Coffee Break</h5>
                        </td>
                        <td className="break hover-bg">
                            <h5>Coffee Break</h5>
                        </td>
                        <td className="break hover-bg">
                            <h5>Coffee Break</h5>
                        </td>
                    </tr>
                    <tr>
                        <td className="event-time">11:00</td>
                        <td className="hover-bg">
                            <h5>Talking To Life</h5>
                            <p><span>By</span> John Smith</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Social Website</h5>
                            <p><span>By</span> Delia Mullins</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Introduce Technology</h5>
                            <p><span>By</span> Bryan Clark</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Marketing Design</h5>
                            <p><span>By</span> Ida Manning</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="event-time">13:30</td>
                        <td className="hover-bg">
                            <h5>Meet Up Marketing</h5>
                            <p><span>By</span> Mc Cage</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Conect People</h5>
                            <p><span>By</span> James Colon</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Maximize CEO</h5>
                            <p><span>By</span> Elmer Dunn</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Reinventing Experiences</h5>
                            <p><span>By</span> Martha Fuller</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="event-time">18:00</td>
                        <td className="hover-bg">
                            <h5>Technology Future</h5>
                            <p><span>By</span> Thomas Munoz</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Reinventing Experiences</h5>
                            <p><span>By</span> Mattie Hanson</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Camping</h5>
                            <p><span>By</span> Rachel Arnold</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Social Website</h5>
                            <p><span>By</span> Leonard Daniels</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div className="tab-pane" id="tabs-2" role="tabpanel">
        <div className="schedule-table-content">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>
                            <strong>Day 1</strong>
                            <span>May 09, 2019</span>
                        </th>
                        <th>
                            <strong>Day 2</strong>
                            <span>May 11, 2019</span>
                        </th>
                        <th>
                            <strong>Day 3</strong>
                            <span>May 12, 2019</span>
                        </th>
                        <th>
                            <strong>Day 4</strong>
                            <span>May 14, 2019</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="event-time">15:00</td>
                        <td className="break hover-bg">
                            <h5>Coffee Break</h5>
                        </td>
                        <td className="break hover-bg">
                            <h5>Coffee Break</h5>
                        </td>
                        <td className="break hover-bg">
                            <h5>Coffee Break</h5>
                        </td>
                        <td className="break hover-bg">
                            <h5>Coffee Break</h5>
                        </td>
                    </tr>
                    <tr>
                        <td className="event-time">16:00</td>
                        <td className="hover-bg">
                            <h5>Talking To Life</h5>
                            <p><span>By</span> John Smith</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Social Website</h5>
                            <p><span>By</span> Delia Mullins</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Introduce Technology</h5>
                            <p><span>By</span> Bryan Clark</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Marketing Design</h5>
                            <p><span>By</span> Ida Manning</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="event-time">17:30</td>
                        <td className="hover-bg">
                            <h5>Meet Up Marketing</h5>
                            <p><span>By</span> Mc Cage</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Conect People</h5>
                            <p><span>By</span> James Colon</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Maximize CEO</h5>
                            <p><span>By</span> Elmer Dunn</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Reinventing Experiences</h5>
                            <p><span>By</span> Martha Fuller</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="event-time">18:00</td>
                        <td className="hover-bg">
                            <h5>Technology Future</h5>
                            <p><span>By</span> Thomas Munoz</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Reinventing Experiences</h5>
                            <p><span>By</span> Mattie Hanson</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Camping</h5>
                            <p><span>By</span> Rachel Arnold</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Social Website</h5>
                            <p><span>By</span> Leonard Daniels</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div className="tab-pane" id="tabs-3" role="tabpanel">
        <div className="schedule-table-content">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>
                            <strong>Day 1</strong>
                            <span>May 09, 2019</span>
                        </th>
                        <th>
                            <strong>Day 2</strong>
                            <span>May 11, 2019</span>
                        </th>
                        <th>
                            <strong>Day 3</strong>
                            <span>May 12, 2019</span>
                        </th>
                        <th>
                            <strong>Day 4</strong>
                            <span>May 14, 2019</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="event-time">16:00</td>
                        <td className="break hover-bg">
                            <h5>Coffee Break</h5>
                        </td>
                        <td className="break hover-bg">
                            <h5>Coffee Break</h5>
                        </td>
                        <td className="break hover-bg">
                            <h5>Coffee Break</h5>
                        </td>
                        <td className="break hover-bg">
                            <h5>Coffee Break</h5>
                        </td>
                    </tr>
                    <tr>
                        <td className="event-time">17:00</td>
                        <td className="hover-bg">
                            <h5>Talking To Life</h5>
                            <p><span>By</span> John Smith</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Social Website</h5>
                            <p><span>By</span> Delia Mullins</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Introduce Technology</h5>
                            <p><span>By</span> Bryan Clark</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Marketing Design</h5>
                            <p><span>By</span> Ida Manning</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="event-time">18:30</td>
                        <td className="hover-bg">
                            <h5>Meet Up Marketing</h5>
                            <p><span>By</span> Mc Cage</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Conect People</h5>
                            <p><span>By</span> James Colon</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Maximize CEO</h5>
                            <p><span>By</span> Elmer Dunn</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Reinventing Experiences</h5>
                            <p><span>By</span> Martha Fuller</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="event-time">19:00</td>
                        <td className="hover-bg">
                            <h5>Technology Future</h5>
                            <p><span>By</span> Thomas Munoz</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Reinventing Experiences</h5>
                            <p><span>By</span> Mattie Hanson</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Camping</h5>
                            <p><span>By</span> Rachel Arnold</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Social Website</h5>
                            <p><span>By</span> Leonard Daniels</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div className="tab-pane" id="tabs-4" role="tabpanel">
        <div className="schedule-table-content">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>
                            <strong>Day 1</strong>
                            <span>May 09, 2019</span>
                        </th>
                        <th>
                            <strong>Day 2</strong>
                            <span>May 11, 2019</span>
                        </th>
                        <th>
                            <strong>Day 3</strong>
                            <span>May 12, 2019</span>
                        </th>
                        <th>
                            <strong>Day 4</strong>
                            <span>May 14, 2019</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="event-time">09:00</td>
                        <td className="break hover-bg">
                            <h5>Coffee Break</h5>
                        </td>
                        <td className="break hover-bg">
                            <h5>Coffee Break</h5>
                        </td>
                        <td className="break hover-bg">
                            <h5>Coffee Break</h5>
                        </td>
                        <td className="break hover-bg">
                            <h5>Coffee Break</h5>
                        </td>
                    </tr>
                    <tr>
                        <td className="event-time">10:00</td>
                        <td className="hover-bg">
                            <h5>Talking To Life</h5>
                            <p><span>By</span> John Smith</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Social Website</h5>
                            <p><span>By</span> Delia Mullins</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Introduce Technology</h5>
                            <p><span>By</span> Bryan Clark</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Marketing Design</h5>
                            <p><span>By</span> Ida Manning</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="event-time">13:30</td>
                        <td className="hover-bg">
                            <h5>Meet Up Marketing</h5>
                            <p><span>By</span> Mc Cage</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Conect People</h5>
                            <p><span>By</span> James Colon</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Maximize CEO</h5>
                            <p><span>By</span> Elmer Dunn</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Reinventing Experiences</h5>
                            <p><span>By</span> Martha Fuller</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="event-time">14:00</td>
                        <td className="hover-bg">
                            <h5>Technology Future</h5>
                            <p><span>By</span> Thomas Munoz</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Reinventing Experiences</h5>
                            <p><span>By</span> Mattie Hanson</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Camping</h5>
                            <p><span>By</span> Rachel Arnold</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Social Website</h5>
                            <p><span>By</span> Leonard Daniels</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div className="tab-pane" id="tabs-5" role="tabpanel">
        <div className="schedule-table-content">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>
                            <strong>Day 1</strong>
                            <span>May 09, 2019</span>
                        </th>
                        <th>
                            <strong>Day 2</strong>
                            <span>May 11, 2019</span>
                        </th>
                        <th>
                            <strong>Day 3</strong>
                            <span>May 12, 2019</span>
                        </th>
                        <th>
                            <strong>Day 4</strong>
                            <span>May 14, 2019</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="event-time">20:00</td>
                        <td className="break hover-bg">
                            <h5>Coffee Break</h5>
                        </td>
                        <td className="break hover-bg">
                            <h5>Coffee Break</h5>
                        </td>
                        <td className="break hover-bg">
                            <h5>Coffee Break</h5>
                        </td>
                        <td className="break hover-bg">
                            <h5>Coffee Break</h5>
                        </td>
                    </tr>
                    <tr>
                        <td className="event-time">22:00</td>
                        <td className="hover-bg">
                            <h5>Talking To Life</h5>
                            <p><span>By</span> John Smith</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Social Website</h5>
                            <p><span>By</span> Delia Mullins</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Introduce Technology</h5>
                            <p><span>By</span> Bryan Clark</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Marketing Design</h5>
                            <p><span>By</span> Ida Manning</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="event-time">23:30</td>
                        <td className="hover-bg">
                            <h5>Meet Up Marketing</h5>
                            <p><span>By</span> Mc Cage</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Conect People</h5>
                            <p><span>By</span> James Colon</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Maximize CEO</h5>
                            <p><span>By</span> Elmer Dunn</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Reinventing Experiences</h5>
                            <p><span>By</span> Martha Fuller</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="event-time">24:00</td>
                        <td className="hover-bg">
                            <h5>Technology Future</h5>
                            <p><span>By</span> Thomas Munoz</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Reinventing Experiences</h5>
                            <p><span>By</span> Mattie Hanson</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Camping</h5>
                            <p><span>By</span> Rachel Arnold</p>
                        </td>
                        <td className="hover-bg">
                            <h5>Social Website</h5>
                            <p><span>By</span> Leonard Daniels</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
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