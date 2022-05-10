import './metadog.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
    chart: {
      type: 'spline'
    },
    title: {
      text: 'My chart'
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6]
      },
      {
        data: [1, 3, 2, 5, 4.5, 6]
      },
      {
        data: [0, 4, 3, 5.7, 4.8, 6]
      }
    ]
  };

  const options1 = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
      },
        title: {
            text: '<b>Memory</b> <br> 15.02% <br> used',
             style: {
            fontSize: '15px',
        },
            align: 'center',
            verticalAlign: 'middle',
            y: 55
        },
    
     credits: {
            enabled: false,
        },
        exporting: {
        buttons: {
            contextButton: {
                enabled: false
            }
        }
    },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: false,
            distance: -50,
            style: {
              fontWeight: 'bold',
              color: 'white'
            }
          },
          // startAngle: -90,
          // endAngle: 90,
          center: ['50%', '60%'],
          size: '95%'
        }
      },
      colors:['#41a9e1','#ecf0f2'],
      series: [{
        type: 'pie',
        name: 'Memory',
        innerSize: '50%',
        data: [
          ['', 15.02],
          ['', 58.9],
          {
            dataLabels: {
              enabled: false
            }
          }
        ]
      }]
  };

  const options2={
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
      },
        title: {
            text: '<b>CPU</b> <br> 04.97% <br> used',
             style: {
            fontSize: '15px',
        },
            align: 'center',
            verticalAlign: 'middle',
            y: 55
        },  
       credits: {
            enabled: false,
        },
    exporting: {
        buttons: {
            contextButton: {
                enabled: false
            }
        }
    },    
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: false,
            distance: -50,
            style: {
              fontWeight: 'bold',
              color: 'white'
            }
          },
          // startAngle: -90,
          // endAngle: 90,
          center: ['50%', '60%'],
          size: '95%'
        }
      },
      colors:['#41a9e1','#ecf0f2'],
      series: [{
        type: 'pie',
        name: 'Memory',
        innerSize: '50%',
        data: [
          ['', 4.97],
          ['', 58.9],
          {
            dataLabels: {
              enabled: false
            }
          }
        ]
      }]
  }

  const options3={
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
      },
        title: {
            text: '<b>Disk Space</b> <br> 7.03% <br> used',
             style: {
            fontSize: '15px',
        },
            align: 'center',
            verticalAlign: 'middle',
            y: 55
        },  
        // title: {
        //     text: 'Disk Space'
        // },
    
        // subtitle: {
        //     text: '7.03% <br> used',
        //     align: 'center',
        //     verticalAlign: 'middle',
        //     y: 60        
        // },      
      // title: {
      //   text: '7.03% <br> used',
      //   align: 'center',
      //   verticalAlign: 'middle',
      //   y: 60
      // },
       credits: {
            enabled: false,
        },
    exporting: {
        buttons: {
            contextButton: {
                enabled: false
            }
        }
    },    
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: false,
            distance: -50,
            style: {
              fontWeight: 'bold',
              color: 'white'
            }
          },
          // startAngle: -90,
          // endAngle: 90,
          center: ['50%', '60%'],
          size: '95%'
        }
      },
      colors:['#41a9e1','#ecf0f2'],
      series: [{
        type: 'pie',
        name: 'Memory',
        innerSize: '50%',
        data: [
          ['', 7.03],
          ['', 58.9],
          {
            dataLabels: {
              enabled: false
            }
          }
        ]
      }]
  }

const metadog=()=>{
    return(
    <div>
        <div className="container-fluid">
    <div className="d-flex justify-content-between">
        <div className="logo">
            <img src={require('../logo.jpeg')} width="80px"/>
        </div>
    <div className="nav-menu">
            <nav className="breadcrumb">
                <ul className="main-list">
                    <li className="nopadding"><i className="fa fa-home"></i>
                    </li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Platform Demo</a></li>
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Smart Contract Sets</a></li>
                    <li className="active"><a href="#">MetaDog</a></li>
                </ul>
            </nav>
    </div>
        <div className="setting">
            <img className="dots" src={require('../dots-icon.png')} width="32px"/>
            <img src={require('../user-icon.png')} width="32px"/>
        </div>
    </div>
</div>

<div className="wrapper">
        <nav className="sidebar">
            <ul className="list-unstyled components">
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Blockchain networks</a></li>                
                <li><a href="#">Blockchain nodes</a></li>
                <li className="dash-item active"><a href="#">Smart contract sets</a></li>
                <li><a href="#">Middleware</a></li>
                <li><a href="#">Integration Tools</a></li>
                <li><a href="#">Storage</a></li>
                <li><a href="#">Private Keys</a></li>
                <li><a href="#">Resource Costs</a></li>
            </ul>
        </nav>

        <div className="content">

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <div className="heading">
                        <h4>MetaDog</h4>
                        <button className="head-button"><span><i className="fa fa-check"></i></span>Running</button>
                    </div>

                    <div className="collapse navbar-collapse" className="navbarSupportedContent">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                <button className="nav-button">Manage Smart Contract Sets</button>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
<div className="container">            
    <div className="row">
        <div className="listmenu">
            <ul>
               <li>Details</li>
               <li className="active">Resources</li>
               <li>Deployment Logs</li> 
            </ul>
        </div>
    </div>
</div>


<div className="container">
    <div className="col-md-12">
        <div className="card box">
            <div className="card-header">
            <h4>Resource Usage</h4>
            <p>Current Resources pack: <b>Medium- 4 GB/ 2 vCPU</b></p>
            </div>
            <div className="card-body">
                <div className="d-flex bd-highlight mb-3">
                    <div className="mr-auto p-2 bd-highlight">
                        <button className="head-button"><span><i className="fa fa-check"></i></span>Healthy
                        </button>
                </div>
            <div className="p-2 bd-highlight">
                <button className="nav-button">Scale</button>
            </div>
        </div>
         <div className="row">
            <div className="col-md-4">
                <div id="container1">
                <HighchartsReact highcharts={Highcharts} options={options1}/>   
                </div>
                 <p className="highcharts-description text-center">0.60 GB used / 4.00 GB allocated </p>
            </div>
            <div className="col-md-4">
                <div id="container2">
                <HighchartsReact highcharts={Highcharts} options={options2}/>   

                </div>
                <p className="highcharts-description text-center">0.099 vCPU used / 200 vCPU allocated </p>
            </div>
            <div className="col-md-4">
                <div id="container3">
                <HighchartsReact highcharts={Highcharts} options={options3}/>   

                </div>
                <p className="highcharts-description text-center">1.38 GB used / 19.62 GB allocated </p>
            </div>
         </div>
            </div>
        </div>

<div className="card box">
    <div className="card-header tabone">
        <h4>Memory</h4>
<div className="tabbutton3">
    <button className="active">Last hour</button>
    <button>Last day</button>
    <button>Last week</button>
    <button>Last month</button>
</div>
</div>
<div className="card-body">
        <div id="container4">
        <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
  </div>      
</div>


    </div>
</div>


        </div>
    </div>

    {/* <div>
    <HighchartsReact highcharts={Highcharts} options={options} />
  </div> */}

    </div>

    
    )


}

function highchartRender() {
    Highcharts.chart('container1', {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: 0,
          plotShadow: false
        },
          title: {
              text: '<b>Memory</b> <br> 15.02% <br> used',
               style: {
              fontSize: '15px',
          },
              align: 'center',
              verticalAlign: 'middle',
              y: 55
          },
      
          // subtitle: {
          //     text: '15.02% <br> used',
          //     align: 'center',
          //     verticalAlign: 'middle',
          //     y: 60        
          // },  
        // title: {
        //   text: '15.02% <br> used',
        //   align: 'center',
        //   verticalAlign: 'middle',
        //   y: 60
        // },
       credits: {
              enabled: false,
          },
          exporting: {
          buttons: {
              contextButton: {
                  enabled: false
              }
          }
      },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
          point: {
            valueSuffix: '%'
          }
        },
        plotOptions: {
          pie: {
            dataLabels: {
              enabled: false,
              distance: -50,
              style: {
                fontWeight: 'bold',
                color: 'white'
              }
            },
            // startAngle: -90,
            // endAngle: 90,
            center: ['50%', '60%'],
            size: '95%'
          }
        },
        colors:['#41a9e1','#ecf0f2'],
        series: [{
          type: 'pie',
          name: 'Memory',
          innerSize: '50%',
          data: [
            ['', 15.02],
            ['', 58.9],
            {
              dataLabels: {
                enabled: false
              }
            }
          ]
        }]
      });
}

export default metadog;