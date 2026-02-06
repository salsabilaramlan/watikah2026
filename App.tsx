import React, { useState, useEffect } from 'react';
import { eventInfo, introText, mainCommittee, workingCommittee, itinerary, students, pledgeText } from './data';
// PEMBETULAN: Memanggil terus dari root
import Navigation from './Navigation'; 
import { Category } from './types';
import { Search, ChevronDown, ChevronUp, MapPin, Calendar, Clock, User, Award, Cpu, Zap, Activity, Aperture, FileText, Shield } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          student.class_name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || student.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const groupedStudents = filteredStudents.reduce((acc, student) => {
    if (!acc[student.category]) {
      acc[student.category] = [];
    }
    acc[student.category].push(student);
    return acc;
  }, {} as Record<string, typeof students>);

  const renderHome = () => (
    <div className="space-y-8 pb-32 animate-fade-in">
      <div className="relative overflow-hidden bg-[#020617] pb-10 rounded-b-[3rem] border-b border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center space-y-6 pt-12 px-6">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400 rounded-full blur-xl opacity-20 animate-pulse"></div>
            <div className="w-24 h-24 bg-[#0f172a] border border-cyan-500/50 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)] mb-2 relative z-10">
               <Aperture size={48} className="text-cyan-400 animate-[spin_10s_linear_infinite]" />
               <Award size={24} className="text-white absolute" />
            </div>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-purple-300 uppercase neon-text">
              Watikah 2026
            </h1>
            <h2 className="text-sm font-medium text-cyan-200 tracking-[0.2em] uppercase">{eventInfo.school}</h2>
          </div>

          <div className="flex items-center space-x-3 bg-cyan-950/30 border border-cyan-500/30 px-6 py-2 rounded-full backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_#4ade80]"></div>
            <span className="font-mono text-cyan-300 text-sm tracking-wider">SYSTEM ONLINE</span>
          </div>
        </div>
      </div>

      <div className="px-6 -mt-12 relative z-20">
        <div className="bg-[#0f172a]/80 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-cyan-500/20 space-y-4 neon-box">
          <div className="flex items-start space-x-4 border-b border-cyan-500/10 pb-4">
            <div className="bg-cyan-950/50 p-3 rounded-lg border border-cyan-500/30">
              <Calendar className="text-cyan-400" size={24} />
            </div>
            <div>
              <p className="text-[10px] text-cyan-500 uppercase tracking-widest font-bold mb-1">Date Log</p>
              <p className="text-slate-100 font-bold text-lg font-mono">{eventInfo.date}</p>
              <p className="text-sm text-slate-400">{eventInfo.day}</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 pt-1">
            <div className="bg-purple-950/50 p-3 rounded-lg border border-purple-500/30">
              <MapPin className="text-purple-400" size={24} />
            </div>
            <div>
              <p className="text-[10px] text-purple-500 uppercase tracking-widest font-bold mb-1">Coordinates</p>
              <p className="text-slate-100 font-bold">{eventInfo.venue}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 space-y-8">
        <section className="relative">
          <div className="absolute -left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-transparent rounded-full opacity-50"></div>
          <h3 className="text-xl font-bold text-white mb-4 pl-4 flex items-center">
            <Cpu className="mr-2 text-cyan-400" size={20} />
            PENDAHULUAN
          </h3>
          <p className="text-slate-300 leading-relaxed text-justify text-sm whitespace-pre-line pl-4 font-light">
            {introText.pendahuluan}
          </p>
        </section>

        <section className="relative">
          <div className="absolute -left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-500 to-transparent rounded-full opacity-50"></div>
          <h3 className="text-xl font-bold text-white mb-4 pl-4 flex items-center">
            <Zap className="mr-2 text-yellow-400" size={20} />
            MATLAMAT
          </h3>
          <ul className="space-y-3 pl-4">
            {introText.matlamat.map((item, idx) => (
              <li key={idx} className="flex items-start space-x-3 text-sm text-slate-300 group">
                <span className="mt-1.5 w-1.5 h-1.5 bg-yellow-500 group-hover:bg-yellow-300 shadow-[0_0_5px_#eab308] rounded-full flex-shrink-0 transition-colors"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="relative">
          <div className="absolute -left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-transparent rounded-full opacity-50"></div>
          <h3 className="text-xl font-bold text-white mb-4 pl-4 flex items-center">
            <Activity className="mr-2 text-purple-400" size={20} />
            OBJEKTIF
          </h3>
          <ul className="space-y-3 pl-4">
            {introText.objektif.map((item, idx) => (
              <li key={idx} className="flex items-start space-x-3 text-sm text-slate-300 group">
                <span className="mt-1.5 w-1.5 h-1.5 bg-purple-500 group-hover:bg-purple-300 shadow-[0_0_5px_#a855f7] rounded-full flex-shrink-0 transition-colors"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );

  const renderCommittee = () => (
    <div className="px-4 pt-24 pb-32 space-y-8 animate-fade-in bg-grid-pattern min-h-screen">
      <div className="text-center space-y-2 mb-8">
        <h2 className="text-2xl font-bold text-white tracking-widest uppercase neon-text">Command Center</h2>
        <div className="h-0.5 w-24 bg-cyan-500 mx-auto shadow-[0_0_10px_#22d3ee]"></div>
      </div>
      
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
        <div className="relative bg-[#0f172a] rounded-xl overflow-hidden border border-slate-700">
          <div className="bg-[#1e293b]/50 p-4 border-b border-slate-700 flex justify-between items-center">
             <h3 className="font-bold text-lg text-cyan-400 tracking-wider uppercase">{mainCommittee.name}</h3>
             <Cpu size={20} className="text-slate-500" />
          </div>
          <div className="p-5 space-y-6">
            {mainCommittee.members.map((member, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest mb-1 border border-purple-500/30 px-2 py-0.5 rounded bg-purple-900/20">{member.role}</span>
                <span className="font-medium text-slate-100 text-lg">{member.name}</span>
                {member.subRole && <span className="text-xs text-slate-400 italic mt-1 font-light">{member.subRole}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-lg font-bold text-white pl-2 border-l-4 border-cyan-500 flex items-center">
           <span className="ml-2">OPERATIONAL UNITS</span>
        </h3>
        {workingCommittee.map((group, idx) => (
          <div key={idx} className="bg-[#0f172a]/60 backdrop-blur-md rounded-xl p-5 border border-slate-700/50 hover:border-cyan-500/30 transition-colors">
            <h4 className="font-bold text-cyan-300 mb-4 pb-2 border-b border-slate-700/50 tracking-wide text-sm uppercase">{group.name}</h4>
            <div className="space-y-4">
              {group.members.map((member, mIdx) => (
                <div key={mIdx} className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline text-sm">
                  <span className="font-semibold text-purple-300 mb-1 sm:mb-0 sm:w-1/3 text-xs uppercase tracking-wider">{member.role}</span>
                  <span className="text-slate-300 sm:w-2/3 sm:text-right font-light">{member.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSchedule = () => (
    <div className="px-6 pt-24 pb-32 animate-fade-in bg-grid-pattern min-h-screen">
      <div className="text-center space-y-2 mb-12">
        <h2 className="text-2xl font-bold text-white tracking-widest uppercase neon-text">Event Sequence</h2>
        <div className="h-0.5 w-24 bg-purple-500 mx-auto shadow-[0_0_10px_#a855f7]"></div>
      </div>

      <div className="relative border-l border-cyan-500/30 ml-3 space-y-10 mb-16">
        {itinerary.map((item, idx) => (
          <div key={idx} className="relative pl-8 group">
            <span className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] bg-[#020617] border-2 border-cyan-500 rounded-full group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_#22d3ee] transition-all duration-300"></span>
            
            <div className="flex flex-col sm:flex-row sm:items-baseline bg-[#0f172a]/40 p-4 rounded-xl border border-transparent group-hover:border-cyan-500/20 group-hover:bg-[#0f172a]/60 transition-all">
              {item.time ? (
                <span className="text-sm font-bold text-cyan-400 sm:w-28 flex-shrink-0 flex items-center mb-1 sm:mb-0 font-mono">
                  <Clock size={14} className="mr-2" /> {item.time}
                </span>
              ) : (
                <span className="hidden sm:block sm:w-28"></span>
              )}
              <span className={`text-slate-200 ${!item.time ? 'text-slate-300 font-light text-sm italic pl-4 border-l border-purple-500/30' : 'font-medium'}`}>
                {item.event}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="relative mb-12">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-xl blur opacity-20"></div>
        <div className="relative bg-[#0f172a] border border-slate-700 rounded-xl p-6 overflow-hidden">
          <div className="flex items-center space-x-3 mb-6 border-b border-slate-700 pb-4">
             <div className="p-2 bg-purple-900/30 rounded-lg">
               <Shield className="text-purple-400" size={24} />
             </div>
             <div>
               <h3 className="font-bold text-white text-lg tracking-wider">PROTOCOL: OATH</h3>
               <p className="text-[10px] text-cyan-400 font-mono tracking-widest">IKRAR PEMIMPIN KECIL SEKOLAH</p>
             </div>
          </div>
          <div className="relative text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
            <pre className="font-sans text-slate-300 whitespace-pre-line leading-relaxed text-sm relative z-10 font-medium">
              {pledgeText}
            </pre>
          </div>
          <div className="mt-6 flex justify-between items-center text-[10px] text-slate-500 font-mono border-t border-slate-800 pt-3">
             <span>SECURE TRANSMISSION</span>
             <span className="animate-pulse text-green-500">● ENCRYPTED</span>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-lg p-6 text-center border border-yellow-500/30 bg-yellow-900/10">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50"></div>
        <p className="text-yellow-200/90 text-sm font-medium italic font-serif tracking-wide relative z-10">
          "Kepimpinan adalah tindakan, bukan kedudukan."
        </p>
        <div className="absolute bottom-0 right-0 p-4 opacity-10">
           <Zap size={64} className="text-yellow-500" />
        </div>
      </div>
    </div>
  );

  const renderStudents = () => (
    <div className="px-4 pt-6 pb-24 animate-fade-in h-screen flex flex-col bg-[#020617]">
       <div className="mt-16 mb-6 space-y-4">
        <div className="flex items-center justify-between">
           <h2 className="text-2xl font-bold text-white uppercase tracking-widest neon-text">Database</h2>
           <div className="px-2 py-1 bg-cyan-900/30 border border-cyan-500/30 rounded text-[10px] text-cyan-400 font-mono">
             {filteredStudents.length} RECORDS
           </div>
        </div>
        
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
          <input
            type="text"
            placeholder="Search protocol initiated..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="relative w-full pl-12 pr-4 py-3 bg-[#0f172a] border border-slate-700 text-slate-200 rounded-xl focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(6,182,212,0.1)] text-sm placeholder-slate-500 font-mono"
          />
          <Search className="absolute left-4 top-3.5 text-cyan-500 z-10" size={18} />
        </div>

        <div className="flex overflow-x-auto pb-4 space-x-2 no-scrollbar mask-gradient">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-5 py-1.5 rounded-none skew-x-[-10deg] text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
              selectedCategory === 'All' 
                ? 'bg-cyan-600 border-cyan-400 text-white shadow-[0_0_10px_rgba(34,211,238,0.4)]' 
                : 'bg-[#0f172a] border-slate-700 text-slate-400 hover:border-cyan-500/50 hover:text-cyan-300'
            }`}
          >
            <span className="skew-x-[10deg] inline-block">ALL</span>
          </button>
          {Object.values(Category).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-1.5 rounded-none skew-x-[-10deg] text-xs font-bold uppercase tracking-wider transition-all duration-300 border whitespace-nowrap ${
                selectedCategory === cat 
                  ? 'bg-cyan-600 border-cyan-400 text-white shadow-[0_0_10px_rgba(34,211,238,0.4)]' 
                  : 'bg-[#0f172a] border-slate-700 text-slate-400 hover:border-cyan-500/50 hover:text-cyan-300'
              }`}
            >
              <span className="skew-x-[10deg] inline-block">{cat}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pr-1 pb-20 space-y-6">
        {Object.keys(groupedStudents).length > 0 ? (
          Object.entries(groupedStudents).map(([category, list]) => (
            <div key={category} className="relative">
              <div className="sticky top-0 bg-[#020617]/95 backdrop-blur z-10 py-3 border-b border-cyan-500/20 mb-4 flex items-center">
                 <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3 shadow-[0_0_5px_#22d3ee]"></div>
                 <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-[0.2em]">
                  {category}
                 </h3>
              </div>
              
              <div className="grid gap-3">
                {list.map((student) => (
                  <div key={student.id} className="group bg-[#0f172a]/50 p-4 rounded-r-xl border-l-2 border-l-slate-600 border-y border-r border-y-slate-800 border-r-slate-800 hover:border-l-cyan-400 hover:bg-[#1e293b]/80 transition-all duration-300 flex items-center space-x-4 relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="bg-slate-800 p-2.5 rounded-lg flex-shrink-0 border border-slate-700 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.2)] transition-all">
                      <User size={18} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0 z-10">
                      <p className="font-bold text-slate-200 text-sm leading-tight mb-1 truncate group-hover:text-white transition-colors">{student.name}</p>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] bg-slate-800/80 border border-slate-700 text-slate-400 px-2 py-0.5 rounded uppercase tracking-wider">
                          {student.class_name}
                        </span>
                         {student.role !== category && (
                            <span className="text-[10px] text-purple-300 font-bold px-2 py-0.5 bg-purple-900/20 border border-purple-500/20 rounded uppercase">
                              {student.role}
                            </span>
                         )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-48 text-slate-600">
            <div className="relative mb-4">
              <div className="absolute inset-0 bg-cyan-500 blur-xl opacity-20"></div>
              <Search size={48} className="text-slate-700 relative z-10" />
            </div>
            <p className="font-mono text-xs tracking-widest uppercase">No data found in sector</p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#020617] max-w-md mx-auto shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden relative font-sans text-slate-200">
      <div className="fixed inset-0 bg-grid-pattern opacity-20 pointer-events-none max-w-md mx-auto"></div>
      {activeTab !== 'home' && (
        <div className={`sticky top-0 z-40 bg-[#020617]/80 backdrop-blur-md border-b border-cyan-500/20 transition-all duration-300 ${isScrolled ? 'shadow-[0_4px_20px_rgba(0,0,0,0.4)]' : ''}`}>
          <div className="px-4 h-16 flex items-center justify-between">
            <div className="flex flex-col">
               <h1 className="font-bold text-white tracking-wider text-sm uppercase">SK Satu Sultan Alam Shah</h1>
               <span className="text-[10px] text-cyan-500 tracking-[0.3em] font-mono">SYSTEM READY</span>
            </div>
            <span className="text-xs font-bold bg-cyan-950 text-cyan-400 border border-cyan-500/30 px-3 py-1 rounded-sm font-mono shadow-[0_0_10px_rgba(34,211,238,0.2)]">2026</span>
          </div>
        </div>
      )}
      <main className="w-full relative z-10">
        {activeTab === 'home' && renderHome()}
        {activeTab === 'committee' && renderCommittee()}
        {activeTab === 'schedule' && renderSchedule()}
        {activeTab === 'students' && renderStudents()}
      </main>
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default App;
