import React from 'react'
import styles from "./Dashboard.module.css"
import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/Header/Header'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Legend,
  Title,
  Tooltip,
} from 'chart.js';
import {Bar, Doughnut, Line} from 'react-chartjs-2'
import ArrowUp from "../../assets/images/Arrow Up.svg"
import ArrowDown from "../../assets/images/Arrow Down.svg"
import Img1 from "../../assets/images/img1.png"
import Img2 from "../../assets/images/img2.png"
import Img3 from "../../assets/images/img3.png"
import Img4 from "../../assets/images/img4.png"
function Dashboard() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    ArcElement,
    Legend,
    Title,
    Tooltip,
  );
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.sideBar}>
                <Sidebar />
            </div>
            <div className={styles.content}>
                <div className={styles.header}>
                    <Header />
                </div>
                <div className={styles.section}>
                  <h4>Dashboard</h4>
                  <div className={styles.topSec}>
                    <div className={styles.revenue}>
                      <div className={styles.info}>
                        <div className={styles.left}>
                          <h2>Revenue</h2>
                          <div>
                            <h1>IDR 7.852.000</h1>
                            <p>
                              <img src={ArrowUp}/>&nbsp;&nbsp;
                              <span className={styles.color}>2.1%</span> vs last week
                            </p>
                          </div>
                        </div>
                        <div className={styles.right}>
                          <button>View Report</button>
                        </div>
                      </div>
                      <p>Sales from 1-12 Dec, 2020</p>
                      <div className={styles.chart}>
                        <Bar
                          data={{
                              labels: [1,2,3,4,5],
                              datasets: [
                                {
                                  label: "Last 6 days",
                                  backgroundColor: "#5A6ACF",
                                  borderColor: "#5A6ACF",
                                  borderWidth: 1,
                                  data: [65, 59, 80, 81, 56],
                                  barThickness:20
                                },
                      
                                {
                                  label: "Last Week",
                                  backgroundColor: "#E6E8EC",
                                  borderColor: "#E6E8EC",
                                  borderWidth: 1,
                                  data: [45, 79, 50, 41, 16],
                                  barThickness:20
                                }
                              ],
                          }}
                          options={{
                            scales:{
                              x: {
                                grid: {
                                  display: false,
                                }
                              },
                              y: {
                                grid: {
                                  display: false,
                               },
                               ticks:{
                                display:false
                               },
                              },
                            },
                            plugins:{
                              legend:{
                                position:'bottom'
                              }
                            }
                          }}
                        />
                      </div>
                    </div>
                    <div className={styles.orderTime}>
                      <div className={styles.info}>
                        <div className={styles.left}> 
                          <h2>Revenue</h2>
                        </div>
                        <div className={styles.right}>
                          <button>View Report</button>
                        </div>
                      </div>
                      <p>Sales from 1-12 Dec, 2020</p>
                      <div className={styles.chart}>
                        <Doughnut
                            data={{
                              labels: [
                                'Morning 28%',
                                'Evening 32%',
                                'Afternoon 40%'
                              ],
                                datasets: [{
                                  label: 'My First Dataset',
                                  data: [28, 32, 40],
                                  backgroundColor: [
                                    '#c7ceff',
                                    '#8593ed',
                                    '#5a6acf'
                                  ],
                                  hoverOffset: 4,
                                }]
                            }}
                            options={{
                              cutout:"70%",
                              plugins:{
                                legend:{
                                  position:'bottom'
                                }
                              }
                            }}
                          />
                      </div>
                    </div>
                  </div>
                  <div className={styles.bottomSec}>
                    <div className={styles.one}>
                      <div className={styles.rating}>
                        <div>
                            <h2>Your Rating</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                        </div>
                      </div>
                      <div className={styles.most}>
                        <div>
                            <h2>Most Ordered Food</h2>
                            <p>Adipiscing elit, sed do eiusmod tempor</p>
                        </div>
                        <div>
                          <div className={styles.item}>
                            <div className={styles.flex}>
                              <div className={styles.img}>
                                <img src={Img1}/>
                              </div>
                              <p>Fresh Salad Bowl</p>
                            </div>
                            <p>IDR 45.000</p>
                          </div>
                          <div className={styles.item}>
                            <div className={styles.flex}>
                              <div className={styles.img}>
                                <img src={Img2}/>
                              </div>
                              <p>Chicken Noodles</p>
                            </div>
                            <p>IDR 45.000</p>
                          </div>
                          <div className={styles.item}>
                            <div className={styles.flex}>
                              <div className={styles.img}>
                                <img src={Img3}/>
                              </div>
                              <p>Smoothie Fruits</p>
                            </div>
                            <p>IDR 45.000</p>
                          </div>
                          <div className={styles.item}>
                            <div className={styles.flex}>
                              <div className={styles.img}>
                                <img src={Img4}/>
                              </div>
                              <p>Hot Chicken Wings</p>
                            </div>
                            <p>IDR 45.000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.two}>
                      <div className={styles.info}>
                        <div className={styles.left}>
                          <h2>Order</h2>
                          <div>
                            <h1>IDR 7.852.000</h1>
                            <p>
                              <img src={ArrowDown}/>&nbsp;&nbsp;
                              <span className={styles.colorRed}>2.1%</span> vs last week
                            </p>
                          </div>
                        </div>
                        <div className={styles.right}>
                          <button>View Report</button>
                        </div>
                      </div>
                      <p>Sales from 1-6 Dec, 2020</p>
                      <div className={styles.chart1}>
                          <Line 
                            data={{
                              labels: [1,2,3,4,5],
                              datasets: [{
                                label: 'Sales Data',
                                data: [65, 59, 80, 81, 56],
                                borderColor: '#5A6ACF',
                                fill: false,
                              },
                              {
                                label: 'Revenue Data',
                                data: [45, 79, 50, 41, 16],
                                borderColor: '#E6E8EC',
                                fill: false,
                              }]

                            }}
                            options={{
                              scales:{
                                x: {
                                  grid: {
                                    display: false,
                                  }
                                },
                                y: {
                                  grid: {
                                    display: false,
                                 },
                                 ticks:{
                                  display:false
                                 },
                                },
                              },
                              plugins:{
                                legend:{
                                  position:'bottom'
                                }
                              }
                            }}
                          />
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard