'use client'
import Barchart from '@/components/chart/BarChart'
import Doughnutchart from '@/components/chart/DoughnutChart'

export default function DashboardPage() {
  const data_doughnut = {
    labels: ['Tiktok', 'Facebook', 'Shopee'],
    datasets: [
      {
        label: 'Marketing Budget',
        data: [65, 60, 54],
        backgroundColor: ['#7D5FFF', '#FF6B6B', '#4ECDC4'],
      },
    ],
  }

  const roas_by_as_type_data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [2.1, 7.6, 2.8, 4.2, 6.8],
        backgroundColor: '#D6C6F5',
        borderRadius: 10,
      },
    ],
  };

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2],
        backgroundColor: '#D6C6F5',
        borderRadius: 10,
      },
    ],
  };

  return (
    <div className="px-6 py-10 min-h-screen bg-primary">
      <h1 className="text-6xl font-bold text-center mb-8 tracking-tight">
        Social media ads
      </h1>
      {/* show number ads */}
      <div className="grid grid-cols-5 gap-6 w-2/4 mx-auto">
        {/* Additional Cards Placeholder */}
        <div className="bg-white rounded-2xl shadow-lg p-4 text-center">
          <h3 className="text-md mb-2">impressions</h3>
          <h2 className='text-4xl'>19,090 ฿</h2>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-4 text-center">
          <h3 className="text-md mb-2">amount spend</h3>
          <h2 className='text-4xl'>23,090 ฿</h2>

        </div>
        <div className="bg-white rounded-2xl shadow-lg p-4 text-center">
          <h3 className="text-md mb-2">revenue</h3>
          <h2 className='text-4xl'>13,090 ฿</h2>

        </div>
        <div className="bg-white rounded-2xl shadow-lg p-4 text-center">
          <h3 className="text-md mb-2">roas</h3>
          <h2 className='text-4xl'>66,090 ฿</h2>

        </div>
        <div className="bg-white rounded-2xl shadow-lg p-4 text-center">
          <h3 className="text-md mb-2">cpm</h3>
          <h2 className='text-4xl'>56,090 ฿</h2>

        </div>
      </div>
      {/* show mini chart 1 */}
      <div className='grid grid-cols-3 gap-6 w-2/4 mx-auto mt-6'>
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-md mb-2 text-center">Budget by shop</h3>
          <div className='flex justify-center items-center w-full'>
            <Doughnutchart chartData={data_doughnut} />
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-4">
          <h3 className="text-md mb-2 text-center">Budget by platform</h3>
          <div className='flex justify-center items-center w-full'>
            <Doughnutchart chartData={data_doughnut} />
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-4">
          <h3 className="text-md mb-2 text-center">Budget by ads type</h3>
          <div className='flex justify-center items-center w-full'>
            <Doughnutchart chartData={data_doughnut} />
          </div>
        </div>
      </div>
      {/* show mini chart 2 */}
      <div className='grid grid-cols-3 gap-6 w-2/4 mx-auto mt-6'>
        <div className="bg-white rounded-2xl shadow-lg p-4">
          <h3 className="text-md mb-2 text-center">Average Roas by ads type</h3>
          <div className='flex justify-center items-center w-full min-h-[250px] max-h-[350px]'>
            <Barchart chartData={roas_by_as_type_data} />
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-4">
          <h3 className="text-md mb-2 text-center">MKT budget by product</h3>
          <Doughnutchart chartData={data_doughnut} />
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-md mb-2 text-center">Average CPM by ads type</h3>
          <div className='flex justify-center items-center w-full min-h-[250px] max-h-[350px]'>
            <Barchart chartData={chartData} />
          </div>
        </div>
      </div>
      {/* Amount Spend by Ads */}
      <div className='flex flex-col w-2/4 mx-auto mt-6 gap-6 bg-gray-50 p-6 rounded-2xl'>
        <h1 className='text-bold text-2xl'> Daily Revenue / Amount Spend by Ads Type</h1>
        <div className="flex justify-between items-start mb-2">
          <div>
            <h2 className="text-sm text-gray-500">Activity</h2>
            <p className="text-3xl font-semibold">24.9 <span className="text-sm font-normal text-gray-500">Hours spent</span></p>
          </div>
        </div>
        <div className='w-full min-h-[250px] max-h-[350px]'>
          <Barchart chartData={chartData} className="text-center" />
        </div>
      </div>
      {/* Average Roas by Channel */}
      <div className='flex flex-col w-2/4 mx-auto mt-6 gap-6 bg-gray-50 p-6 rounded-2xl'>
        <h1 className='text-bold text-2xl'> Daily Average Roas by Channel</h1>
        <div className="flex justify-between items-start mb-2">
          <div>
            <h2 className="text-sm text-gray-500">Activity</h2>
            <p className="text-3xl font-semibold">24.9 <span className="text-sm font-normal text-gray-500">Hours spent</span></p>
          </div>
        </div>
        <div className='w-full min-h-[250px] max-h-[350px]'>
          <Barchart chartData={chartData} />
        </div>
      </div>
      {/* Campaign Performance */}
      <div className='flex flex-col w-2/4 mx-auto mt-6 gap-6 bg-gray-50 p-6 rounded-2xl'>
        <h1 className='text-bold text-2xl'> Campaign Performance</h1>
        <div className="flex justify-between items-start mb-2">
          <div>
            <h2 className="text-sm text-gray-500">Activity</h2>
            <p className="text-3xl font-semibold">24.9 <span className="text-sm font-normal text-gray-500">Hours spent</span></p>
          </div>
        </div>
        <div className='w-full min-h-[250px] max-h-[350px]'>
          <Barchart chartData={chartData} />
        </div>
      </div>
      {/* Product Performance */}
      <div className='flex flex-col w-2/4 mx-auto mt-6 gap-6 bg-gray-50 p-6 rounded-2xl'>
        <h1 className='text-bold text-2xl'> Product Performance</h1>
        <div className="flex justify-between items-start mb-2">
          <div>
            <h2 className="text-sm text-gray-500">Activity</h2>
            <p className="text-3xl font-semibold">24.9 <span className="text-sm font-normal text-gray-500">Hours spent</span></p>
          </div>
        </div>
        <div className='w-full min-h-[250px] max-h-[350px]'>
          <Barchart chartData={chartData} />
        </div>
      </div>
      {/* By platform */}
      <div className="flex flex-col bg-gray-50 rounded-xl p-6 w-2/4 mt-6 mx-auto">
        <h2 className="text-lg font-semibold mb-4">By platform</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src="/tiktok_logo.png" alt="Tiktok logo" className="w-10" />
              <div>
                <p className="font-medium">Tiktok</p>
              </div>
            </div>
            <p className="text-sm">65,000 ฿</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src="/facebook_logo.png" alt="Facebook logo" className="w-10" />
              <div>
                <p className="font-medium">facebook</p>
              </div>
            </div>
            <p className="text-sm">60,000 ฿</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src="/shopee_logo.png" alt="Shopee logo" className="w-10" />
              <div>
                <p className="font-medium">Shopee</p>
              </div>
            </div>
            <p className="text-sm">54,000 ฿</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src="/lazada_logo.png" alt="Lazada logo" className="w-10" />
              <div>
                <p className="font-medium">Lazada</p>
              </div>
            </div>
            <p className="text-sm">22,000 ฿</p>
          </div>
        </div>
      </div>
    </div>
  )
}