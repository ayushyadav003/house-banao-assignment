import { useEffect, useState } from 'react'
import SemiCircleProgressBar from 'react-progressbar-semicircle'
import './dashboard.scss'
import Header from '../../components/header/Header'
import SelectOption from '../../components/common/SelectOption'
import { apiConfig } from '../../api/apiConfig'
import axios from 'axios'
import CommonTable from '../../components/common/CommonTable'
import { Skeleton } from '@mui/material'
import TotalTasks from '../../components/totalTasks/TotalTasks'

const overViewFilterOpyions = [
  { title: 'Last 30 days', val: 30 },
  { title: 'Last 60 days', val: 60 },
  { title: 'Last 90 days', val: 90 },
]
const projectOptions = [
  { title: 'Project', val: '' },
  { title: 'Media channel branding', val: 60 },
  { title: 'Data scale Ai app', val: 90 },
]
const managerOptions = [
  { title: 'Project Manager', val: '' },
  { title: 'Om prakash sao', val: 'Om prakash sao' },
  { title: 'Neilsan mando', val: 'Neilsan mando' },
]
const statusOption = [
  { title: 'Status', val: '' },
  { title: 'Completed', val: 'Completed' },
  { title: 'Delayed', val: 'Delayed' },
  { title: 'At rish', val: 'At risk' },
]

const head = ['Name', 'Project manager', 'Due date', 'Status', 'Progress']

export default function Dashboard() {
  const [overViewFilter, setOverviewFilter] = useState(30)
  const [projectFilter, setProjectFilter] = useState('')
  const [managerFilter, setManagerFilter] = useState('')
  const [StatusFilter, setStatusFilter] = useState('')
  const [overviewData, setOverviewData] = useState([])
  const [projectSummary, setProjectSummary] = useState([])

  const getOverview = async () => {
    try {
      const apiOptions = {
        method: 'Get',
        url: apiConfig['overview'],
      }
      const response = await axios(apiOptions)
      if (response?.status === 200) {
        console.log(response)
        setOverviewData(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const getProjectSummary = async () => {
    try {
      const apiOptions = {
        method: 'Get',
        url: apiConfig['projectSummary'],
      }
      const response = await axios(apiOptions)
      if (response?.status === 200) {
        console.log('2', response)
        setProjectSummary(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getOverview()
    getProjectSummary()
  }, [])

  return (
    <div className="dashboardPage">
      <Header title="Dashboard" />
      <div className="overviewSection">
        <div className="innerHeader">
          <h2>Overview</h2>
          <SelectOption
            value={overViewFilter}
            setValue={setOverviewFilter}
            options={overViewFilterOpyions}
          />
        </div>
        <div className="cards">
          {overviewData.length > 0 ? (
            overviewData.map((data, i) => (
              <div key={i}>
                <img src={data?.icon} alt={data?.title} height={60} />
                <p>{data.title}</p>
                <h3>{data.val}</h3>
                <span>{data.fluctuation}</span>
              </div>
            ))
          ) : (
            <>
              <Skeleton variant="rectangular" width={210} height={118} />
              <Skeleton variant="rectangular" width={210} height={118} />
              <Skeleton variant="rectangular" width={210} height={118} />
              <Skeleton variant="rectangular" width={210} height={118} />
            </>
          )}
        </div>
      </div>
      <div className="projectWrapper">
        <div className="inner">
          <div className="sectionHeader">
            <h3>Project summary</h3>
            <div>
              <SelectOption
                value={projectFilter}
                setValue={setProjectFilter}
                options={projectOptions}
              />{' '}
              <SelectOption
                value={managerFilter}
                setValue={setManagerFilter}
                options={managerOptions}
              />{' '}
              <SelectOption
                value={StatusFilter}
                setValue={setStatusFilter}
                options={statusOption}
              />
            </div>
          </div>
          <div>
            {projectSummary.length > 0 ? (
              <CommonTable
                head={head}
                data={projectSummary}
                type="projectSummary"
              />
            ) : (
              <Skeleton variant="rectangular" width="100%" height={220} />
            )}
          </div>
        </div>
        <div className="inner2">
          <div className="sectionHeader">
            <h3>Overall Progress</h3>
            <SelectOption
              value={projectFilter}
              setValue={setProjectFilter}
              options={projectOptions}
            />
          </div>
          <div className="progressWrapper">
            <SemiCircleProgressBar
              percentage={95}
              diameter={380}
              strokeWidth={20}
            />
            <div className="progressValue">
              <p>72%</p>
              <span>Completed</span>
            </div>
          </div>
          <div className="progressDetails">
            <div>
              <p>95</p>
              <span>Total projects</span>
            </div>
            <div>
              <p style={{ color: 'green' }}>26</p>
              <span>Completed</span>
            </div>
            <div style={{ color: 'gold' }}>
              <p>35</p>
              <span>Delayed</span>
            </div>
            <div>
              <p style={{ color: 'red' }}>35</p>
              <span>On going</span>
            </div>
          </div>
        </div>
      </div>
      <div className="projectWrapper">
        <div className="inner">
          <TotalTasks />
        </div>
        <div className="inner2">
          <div className="sectionHeader">
            <h3>Overall Progress</h3>
            <SelectOption
              value={projectFilter}
              setValue={setProjectFilter}
              options={projectOptions}
            />
          </div>
          <div className="progressWrapper">
            <SemiCircleProgressBar
              percentage={95}
              diameter={380}
              strokeWidth={20}
            />
            <div className="progressValue">
              <p>72%</p>
              <span>Completed</span>
            </div>
          </div>
          <div className="progressDetails">
            <div>
              <p>95</p>
              <span>Total projects</span>
            </div>
            <div>
              <p style={{ color: 'green' }}>26</p>
              <span>Completed</span>
            </div>
            <div style={{ color: 'gold' }}>
              <p>35</p>
              <span>Delayed</span>
            </div>
            <div>
              <p style={{ color: 'red' }}>35</p>
              <span>On going</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
