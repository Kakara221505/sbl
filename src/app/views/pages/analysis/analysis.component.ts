import { Component, Injectable, OnInit } from '@angular/core';
import {NgbCalendar,
  NgbDateAdapter,
  NgbDateParserFormatter,
  NgbDatepickerModule,
  NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UnifiedService } from '../service/unified_registry/unified.service';
import { style } from '@angular/animations';
import {ApexAxisChartSeries,ApexChart,ChartComponent,ApexDataLabels,
  ApexPlotOptions,ApexYAxis,ApexLegend,ApexStroke,ApexXAxis,
  ApexFill,ApexTooltip } from "ng-apexcharts";
import { Width } from 'ngx-owl-carousel-o/lib/services/carousel.service';
import { number } from 'ngx-custom-validators/src/app/number/validator';
import { FormsModule } from '@angular/forms';
// import { JsonPipe } from '@angular/common';

// date formate change start
@Injectable()
export class CustomAdapter extends NgbDateAdapter<string> {
    readonly DELIMITER = '-';

    fromModel(value: string | null): NgbDateStruct | null {
        if (value) {
            const date = value.split(this.DELIMITER);
            return {
                day: parseInt(date[0], 10),
                month: parseInt(date[1], 10),
                year: parseInt(date[2], 10),
            };
        }
        return null;
    }

    toModel(date: NgbDateStruct | null): string | null {
       return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
    }
}

@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {
  readonly DELIMITER = '/';

  parse(value: string): NgbDateStruct | null {
    if (value) {
      const date = value.split(this.DELIMITER);
      return {
        day: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10),
      };
    }
    return null;
  }

  format(date: NgbDateStruct | null): string {
    return date
      ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year
      : '';
  }
}
// date formate change end
@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss'],
  providers: [
           { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
  ]
})
export class AnalysisComponent implements OnInit {
  // selectedDate:NgbDateStruct = { year: 2023, month: 5, day: 1 };
  fromDate = `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`
  toDate = `${new Date().getDate()}-${new Date().getMonth()+1}-${new Date().getFullYear()}`
  incomeFromDate =`${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`
  incomeToDate = `${new Date().getDate()}-${new Date().getMonth()+1}-${new Date().getFullYear()}`
  exchangeFromDate = `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`
  exchangeToDate = `${new Date().getDate()}-${new Date().getMonth()+1}-${new Date().getFullYear()}`
  fromRewardDate = `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`
  toRewardDate = `${new Date().getDate()}-${new Date().getMonth()+1}-${new Date().getFullYear()}`
  allDeta = {total : 0, department1 : 0 , department2 : 0};
  totalData: any;
  department1data: any;
  department2data: any;
  exchangeAllData: any;
  totalExchangedata: any;
  department1DataExchnage: any;
  department2DataExchnage: any;
  allIncome: any;
  allreward: any;
  allractification: any;
  allraised: any;
  allrewardTodatl: any;
  allraisedTotal: any;
  allractificationTotal: any;
  ngbDate: any;
  formattedDate: string;
  fromDaTE : any
  ToDaTE : any
barGraphData :number[]= [] 
incomeBarGraph : number[]=[]
exchangeGraphTotal :number[] =[]
exchangeGraphApproved :number[] =[]
exchangeGraphPending :number[] =[]
exchangeGraphResolved :number[] =[]
piechart :number[] =[]
piechartRaised :number[] =[]
piechartReward :number[] =[]
  
  public lineChartOptions: any = {};
  public areaChartOptions: any = {};
  public mixedChartOptions: any = {};
  public donutChartOptions: any = {};
  public heatMapChartOptions: any = {};
  public radarChartOptions: any = {};
  public scatterChartOptions: any = {};
  public radialBarChartOptions: any = {};

  public barChartOptions: Partial<any>;
  public OptionsForIncome: Partial<any>;
  public chartOptions: Partial<any>;
  public PiechartOptions: Partial<any>;
  public PiechartOptionsRaised: Partial<any>;
  public PiechartOptionsReward: Partial<any>;

  obj = {
    primary        : "#6571ff",
    secondary      : "#7987a1",
    success        : "#05a34a",
    info           : "#66d1d1",
    warning        : "#fbbc06",
    danger         : "#ff3366",
    light          : "#e9ecef",
    dark           : "#060c17",
    muted          : "#7987a1",
    gridBorder     : "rgba(77, 138, 240, .15)",
    bodyColor      : "#000",
    cardBg         : "#fff",
    fontFamily     : "'Roboto', Helvetica, sans-serif"
  }
  incomeDate: any;
  toIncomedate : any;
  toExchangeDate:any;
  fromExchangeDate:any;
  rewardFrom:any;
  rewardTo:any
  maxDate: any
dateTodisabled: true;
  constructor(private unifiedService: UnifiedService, private route: ActivatedRoute,
    private router: Router, private toastr: ToastrService, private spinner: NgxSpinnerService,private ngbCalendar: NgbCalendar,
    private dateAdapter: NgbDateAdapter<string>) {}

  ngOnInit(): void {
    this.onDateSelection();
    this.exchangeData();
    this.incomeAvailing();
    this.reward();
    this.raised();
    this.rectification();
    this.maxDate = {year:new Date().getFullYear(),month: new Date().getMonth()+1,day:new Date().getDate()}
    console.log(this.fromDate)
    console.log(this.toDate)
  }

  onDateChange(): void {
    console.log('From date changed:', this.fromDate);
    // You can perform any additional actions with the changed value here
  }
  onDateChangeTo(): void {
    console.log('From date changed:', this.toDate);
    // You can perform any additional actions with the changed value here
  }
getBarChartOptions() {
  this.barChartOptions = {
    series: [
      {
        name: "Users",
        data: this.barGraphData,
      },
    ],
    colors: ['#6571FF'],
    fontsize:24,
    grid: {
      borderColor: "rgba(77, 138, 240, .1)",
      padding: {
        bottom: 0,
      },
    },
    chart: {
      type: "bar",
      columnWidth:'400',
      height: "420",
      width: '60%',
      parentHeightOffset: 0,
    },
    xaxis: {
      type: "date",
      categories: ['Unified Registry System','Blockchain users' ,'Food & Supplies Dept', 'Dept of Local Govt'],
    },
  };
}
  onDateSelection(){
    this.barGraphData=[]    
    this.fromDaTE = this.fromDate.replace(/-/g, '/')
    this.ToDaTE = this.toDate.replace(/-/g, '/')
  console.log(this.fromDate)
    this.spinner.show();
    this.unifiedService.totalNoUSer(this.fromDaTE, this.ToDaTE).subscribe((data: any) => {
      this.barGraphData.push(data.data.total)
      this.barGraphData.push(data.data.blockChainUsers)
      this.barGraphData.push(data.data.department1)
      this.barGraphData.push(data.data.department2)
      this.getBarChartOptions();
    this.spinner.hide();
    },error => {
      this.toastr.error(error.error.message, `Error`)
    }) 
  }

  getexchange(){
    this.chartOptions = {
      series: [
        {
          name: "Total",
          data: this.exchangeGraphTotal,
         
        },
        {
          name: "Approved",
          data: this.exchangeGraphApproved
        },
        {
          name: "Rejected",
          data: this.exchangeGraphResolved
        },
        {
          name: "Pending",
          data: this.exchangeGraphPending
        },
      ],
      colors:['#6571FF','#3DD370','#FF3366','#F2B003'],
      chart: {
        type: "bar",
        height: 450,
        Width: '100%'
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          'Total Data Exchange Request',
           'Department 1 Data Exchange Request',
           'Department 2 Data Exchange Request'
        ]
      },
    
      fill: {
        opacity: 1
      },
    };
  }
  exchangeData() {
    this.exchangeGraphTotal = [],
    this.exchangeGraphApproved = [],
    this.exchangeGraphPending = [],
    this,this.exchangeGraphResolved = [],
    this.spinner.show();
    this.fromExchangeDate = this.exchangeFromDate.replace(/-/g, '/')
    this.toExchangeDate =  this.exchangeToDate.replace(/-/g, '/')
    this.unifiedService.totalNoExchange(this.fromExchangeDate, this.toExchangeDate).subscribe((data: any) => {
      this.exchangeAllData = data.data
      this.totalExchangedata = data.data.total
      this.department1DataExchnage = data.data.department1
      this.department2DataExchnage = data.data.department2
      this.exchangeGraphTotal.push(data.data.total.total)
      this.exchangeGraphTotal.push(data.data.department1.total)
      this.exchangeGraphTotal.push(data.data.department2.total)
      this.exchangeGraphApproved.push(data.data.total.approved)
      this.exchangeGraphApproved.push(data.data.department1.approved)
      this.exchangeGraphApproved.push(data.data.department2.approved)
      this.exchangeGraphPending.push(data.data.total.pending)
      this.exchangeGraphPending.push(data.data.department1.pending)
      this.exchangeGraphPending.push(data.data.department2.pending)
      this.exchangeGraphResolved.push(data.data.total.rejected)
      this.exchangeGraphResolved.push(data.data.department1.rejected)
      this.exchangeGraphResolved.push(data.data.department2.rejected)
      console.log(data.data.department1.total)
      this.getexchange();
      this.spinner.hide();
    }, error => {
      this.toastr.error(error.error.message, `Error`)
    })
  }

getBarChartOptionsIncome() {
  /**
     * Bar chart options
     */
  this.OptionsForIncome = {
    series: [
      {
        name: "Users",
        data: this.incomeBarGraph,
      },
    ],
    colors: ["#9F00D7"],
    grid: {
      borderColor: "rgba(77, 138, 240, .1)",
      padding: {
        bottom: 0,
      },
    },
    chart: {
      type: "bar",
      height: "420",
      parentHeightOffset: 0,
    },
    xaxis: {
      type: "date",
      categories: ['0-50', '50-100', '100-150', '150-200', '200-250', '250-300', '300-350', '350-400', '400-450', '450-500', '>500'],
    },
  };
}
  incomeAvailing() {
    this.incomeBarGraph =[] 
    this.incomeDate = this.incomeFromDate.replace(/-/g, '/')
    this.toIncomedate =  this.incomeToDate.replace(/-/g, '/')
    this.spinner.show();
    this.unifiedService.totalIncomeAvailing(this.incomeDate, this.toIncomedate).subscribe((data: any) => {
      this.allIncome = data.data
        this.incomeBarGraph.push(data.data.range0TO50)
        this.incomeBarGraph.push(data.data.range50TO100)
        this.incomeBarGraph.push(data.data.range100TO150)
        this.incomeBarGraph.push(data.data.range150TO200)
        this.incomeBarGraph.push(data.data.range200TO250)
        this.incomeBarGraph.push(data.data.range250TO300)
        this.incomeBarGraph.push(data.data.range300TO350)
        this.incomeBarGraph.push(data.data.range350TO400)
        this.incomeBarGraph.push(data.data.range400TO450)
        this.incomeBarGraph.push(data.data.range450TO500)
        this.incomeBarGraph.push(data.data.rangeGreaterThan500)
      this.getBarChartOptionsIncome();
      this.spinner.hide();
    }, error => {
      this.toastr.error(error.error.message, `Error`)
    })
  }

  getReward(){
    this.PiechartOptionsReward = {
      series: this.piechartReward,
      chart: {
        width: 480,
        type: "pie",
        color:'#DC78FF',
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {
            download: true,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
            reset: true ,
            customIcons: []
          },
          export: {
            csv: {
              filename: undefined,
              columnDelimiter: ',',
              headerCategory: 'category',
              headerValue: 'value',
              dateFormatter(timestamp: string | number | Date) {
                return new Date(timestamp).toDateString()
              }
            },
            svg: {
              filename: undefined,
            },
            png: {
              filename: undefined,
            }
          },
          autoSelected: 'zoom' 
        },
      },
      labels: ["Food & Supplies Dept", "Dept of Local Govt"],
      colors:['#3DD370','#6571FF'],
      responsive: [
        {
          
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  reward(){
    this.piechartReward = []
    this.spinner.show();
this.rewardFrom =  this.fromRewardDate.replace(/-/g, '/')
this.rewardTo = this.toRewardDate.replace(/-/g, '/')
    this.unifiedService.totalReward(this.rewardFrom,this.rewardTo).subscribe((data: any) => {
      this.allreward = data.data
      this.allrewardTodatl = data.data.total
      console.log(this.allreward)
      this.piechartReward.push(data.data.department1)
      this.piechartReward.push(data.data.department2)
      this.getReward()
      this.spinner.hide();
    },error =>{
      this.toastr.error(error.error.message,`Error`)
     })
  }

getReactification(){
  this.PiechartOptions = {
    series: this.piechart,
    chart: {
      width: 480,
      type: "pie",
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 0,
        tools: {
          download: true,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true ,
          customIcons: []
        },
        export: {
          csv: {
            filename: undefined,
            columnDelimiter: ',',
            headerCategory: 'category',
            headerValue: 'value',
            dateFormatter(timestamp: string | number | Date) {
              return new Date(timestamp).toDateString()
            }
          },
          svg: {
            filename: undefined,
          },
          png: {
            filename: undefined,
          }
        },
        autoSelected: 'zoom' 
      },
    },
    labels: ["Pending", "Resolved"],
    colors:['#DC78FF','#9F00D7'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 400,
           
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ]
  };
}
  rectification(){
    this.spinner.show();
    this.spinner.show();
    this.unifiedService.totalRaised().subscribe((data: any) => {
      this.allraised = data.data
      this.allraisedTotal = data.data.total
      this.piechart.push(data.data.pending)
      this.piechart.push(data.data.resolved)
      this.getReactification()
      console.log(this.allraised)
//  pie chart 
      this.spinner.hide();
    },error =>{
      this.toastr.error(error.error.message,`Error`)
     })
  }

  getRaised(){
    this.PiechartOptionsRaised = {
      series: this.piechartRaised,
      chart: {
        width: 480,
        type: "pie",
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {
            download: true,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
            reset: true,
            customIcons: []
          },
          export: {
            csv: {
              filename: undefined,
              columnDelimiter: ',',
              headerCategory: 'category',
              headerValue: 'value',
              dateFormatter(timestamp: string | number | Date) {
                return new Date(timestamp).toDateString()
              }
            },
            svg: {
              filename: undefined,
            },
            png: {
              filename: undefined,
            }
          },
          autoSelected: 'zoom' 
        },
      },
      labels: ["Food & Supplies Dept", "Dept of Local Govt"],
      colors:['#F2B003','#FF3366'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 400
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
  
  raised(){
    this.spinner.show();
    this.unifiedService.totalRectification().subscribe((data: any) => {
      this.allractification = data.data
      this.allractificationTotal = data.data.total
      this.piechartRaised.push(data.data.department1)
      this.piechartRaised.push(data.data.department2)
      this.getRaised();

      console.log(this.allractification)
       
//  pie chart 
      this.spinner.hide();
    },error =>{
      this.toastr.error(error.error.message,`Error`)
     })
  }

}
