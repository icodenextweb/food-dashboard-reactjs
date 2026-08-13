import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { User, Info, Briefcase,UtensilsCrossed , ChevronDown, ChevronRight } from 'lucide-react';

export default function Sidebar() {
  const [MenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

 //check route
  const isMenuActive = location.pathname.startsWith('/menu');

  useEffect(() => {
    if (isMenuActive) {
      setMenuOpen(true);
    }
  }, [isMenuActive]);

  // Active link styling
  const getLinkClass = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
      isActive
        ? 'bg-rose-600 text-white'
        : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
    }`;

  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-4 flex flex-col">
      <h2 className="text-xl font-bold mb-6 px-3 text-slate-100 tracking-wide">
       FoodDash
      </h2>
      <nav className="flex flex-col gap-1">
   
   
      <NavLink to = "/" className={getLinkClass}>
      <Briefcase size={18}/>
      <span>Dashboard</span>
      </NavLink>


        <NavLink to="/staff" className={getLinkClass}>
          <User size={18} />
          <span>Staff</span>
        </NavLink>



        <NavLink to="/analytics" className={getLinkClass}>
          <Info size={18} />
          <span>Analytics</span>
        </NavLink>

        {/* Submenu Accordion */}
        <div>
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              isMenuActive
                ? 'text-white'
                : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
            }`}
          >
            <UtensilsCrossed  size={18} />
            <span>Menu</span>
            <span className="ml-auto text-slate-400">
              {MenuOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </span>
          </button>

          {/* Submenu Items */}
          {MenuOpen && (
            <div className="pl-6 flex flex-col gap-1 mt-1 border-l border-slate-800 ml-5">
              <NavLink to="/menu/food" className={getLinkClass}>
               Food
              </NavLink>
              <NavLink to="/menu/drinks" className={getLinkClass}>
                Drinks
              </NavLink>
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
}