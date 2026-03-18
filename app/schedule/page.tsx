import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Class Schedule',
  description: 'View the training schedule for Doshinkai Dojo in Cincinnati. We offer youth, adult, and advanced Shotokan Karate classes both in-person and via Zoom.',
};

export default function Schedule() {
  const scheduleData = [
    {
      day: "Sunday",
      classes: [
        { time: "1:30 PM - 2:30 PM", name: "All Levels", type: "In-Person" },
        { time: "2:30 PM - 3:30 PM", name: "Intermediate / Advance", type: "In-Person" }
      ]
    },
    {
      day: "Monday",
      classes: [
        { time: "7:30 PM - 8:30 PM", name: "All Levels", type: "Zoom" }
      ]
    },
    {
      day: "Wednesday",
      classes: [
        { time: "5:15 PM - 6:15 PM", name: "Youth", type: "In-Person", note: "Age 5-11" },
        { time: "7:30 PM - 8:30 PM", name: "All Levels", type: "Zoom" }
      ]
    },
    {
      day: "Saturday",
      classes: [
        { time: "1:30 PM - 2:30 PM", name: "All Levels", type: "In-Person" },
        { time: "2:30 PM - 3:30 PM", name: "Intermediate / Advance", type: "In-Person" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-red-700 selection:text-white">
      
      {/* 1. HEADER SECTION */}
      <section className="relative pt-[120px] md:pt-[180px] pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-neutral-200">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div>
            <div className="w-16 h-1.5 bg-red-700 mb-8"></div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-black">
              Training <br />
              <span className="text-neutral-300">Schedule</span>
            </h1>
          </div>
          <div className="max-w-md">
            <p className="text-lg text-neutral-500 font-medium leading-relaxed">
              Consistency is the key to mastery. Find the right class for your skill level and join us on the mat or online via Zoom.
            </p>
          </div>
        </div>
      </section>

      {/* 1.5 LOCATION INFO BAR (NEW) */}
      <section className="bg-black text-white py-12 border-b-4 border-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Physical Address */}
            <div className="flex items-start gap-4">
              <div className="mt-1 shrink-0">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-red-600 mb-1">Physical Dojo</h3>
                <p className="font-bold text-lg mb-1">Doshinkai Dojo</p>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  6620 Montgomery Road, Suite 3<br />
                  Cincinnati, OH 45213
                </p>
              </div>
            </div>

            {/* Virtual Info */}
            <div className="flex items-start gap-4 md:border-l md:border-neutral-800 md:pl-8">
              <div className="mt-1 shrink-0">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-red-600 mb-1">Virtual Training</h3>
                <p className="font-bold text-lg mb-1">Zoom Access</p>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Secure links for all virtual classes are provided directly to registered students prior to class.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THE AGENDA GRID */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {scheduleData.map((dayPlan, index) => (
              <div key={index} className="bg-white border border-neutral-200 p-8 md:p-10 hover:border-black hover:shadow-2xl transition-all duration-300 relative group">
                <div className="absolute top-0 left-0 w-full h-1 bg-red-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                
                <h2 className="text-3xl font-black uppercase tracking-tight text-black mb-8 border-b border-neutral-100 pb-4">
                  {dayPlan.day}
                </h2>
                
                <div className="space-y-6">
                  {dayPlan.classes.map((cls, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 group/class">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-neutral-400 mb-1 tracking-widest uppercase">
                          {cls.time}
                        </span>
                        <div className="flex items-center gap-3">
                          <span className="text-xl font-bold text-black group-hover/class:text-red-700 transition-colors">
                            {cls.name}
                          </span>
                          {cls.note && (
                            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-sm">
                              {cls.note}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {/* Badge for Zoom vs In-Person */}
                      <div>
                        {cls.type === "Zoom" ? (
                          <span className="inline-block border-2 border-red-700 text-red-700 text-[10px] font-black uppercase tracking-widest px-3 py-1.5">
                            Virtual (Zoom)
                          </span>
                        ) : (
                          <span className="inline-block bg-black text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5">
                            Dojo
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 3. ATTENDANCE GUIDELINES */}
      <section className="py-24 bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <h3 className="text-xs font-black uppercase tracking-widest text-red-700 mb-2">Important Information</h3>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-black">Attendance Guidelines</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            
            {/* Youth Guidelines */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold uppercase tracking-tight text-black border-b border-neutral-200 pb-2">Youth Classes</h4>
              <p className="text-neutral-600 leading-relaxed">
                Youth classes are carefully divided into two age groups to ensure appropriate attention and development:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-700 font-bold mt-0.5">&rarr;</span>
                  <span className="text-neutral-600"><strong className="text-black">Ages 5 to 7:</strong> 45-minute duration.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-700 font-bold mt-0.5">&rarr;</span>
                  <span className="text-neutral-600"><strong className="text-black">Ages 8 to 11:</strong> 60-minute duration.</span>
                </li>
                <li className="flex items-start gap-3 mt-4">
                  <span className="text-red-700 font-bold mt-0.5">*</span>
                  <span className="text-sm text-neutral-500 italic">Participants aged 12 years and older may have the opportunity to attend the Wednesday Youth class, subject to instructor permission and schedule availability.</span>
                </li>
              </ul>
            </div>

            {/* Adult/All Levels Guidelines */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold uppercase tracking-tight text-black border-b border-neutral-200 pb-2">All Levels & Advanced</h4>
              <p className="text-neutral-600 leading-relaxed">
                To maintain the pace and rigor of our main sessions, the following age requirements apply:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-700 font-bold mt-0.5">&rarr;</span>
                  <span className="text-neutral-600">Participants of <strong>All Levels</strong>, including <strong>Intermediate and Advanced</strong>, must be <strong className="text-black">12 years old or older</strong>.</span>
                </li>
                <li className="flex items-start gap-3 mt-4">
                  <span className="text-red-700 font-bold mt-0.5">*</span>
                  <span className="text-sm text-neutral-500 italic">Those aged 11 and younger may have the opportunity to attend these sessions strictly subject to instructor permission.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="bg-black text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8">
            Ready to step on the mat?
          </h2>
          <Link 
            href="/join/class-registration" 
            className="group relative inline-flex items-center justify-center px-10 py-5 text-sm font-bold uppercase tracking-widest text-black bg-white overflow-hidden shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <span className="absolute inset-0 w-full h-full bg-red-700 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            <span className="relative flex items-center gap-3 group-hover:text-white transition-colors">
              Register Now
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </span>
          </Link>
        </div>
      </section>

    </div>
  );
}