import React, { useState } from 'react';
import { ViewState, Tab } from './types';
import { activities, stays } from './services/mockData';

// Pages
import { BottomNav } from './components/BottomNav';
import { ActivitiesPage } from './pages/ActivitiesPage';
import { SquarePage } from './pages/SquarePage';
import { StayPage } from './pages/StayPage';
import { ProfilePage } from './pages/ProfilePage';
import { ActivityDetail } from './pages/ActivityDetail';
import { StayDetail } from './pages/StayDetail';
import { PublishMenu, PublishActivityForm, PublishPostForm } from './pages/PublishPages';

const App: React.FC = () => {
  const [viewState, setViewState] = useState<ViewState>({ type: 'tab', tab: 'activities' });

  // Navigation Handlers
  const handleTabChange = (tab: Tab) => {
    if (tab === 'publish') {
      setViewState({ type: 'publish_menu' });
    } else {
      setViewState({ type: 'tab', tab });
    }
  };

  const navigateToActivity = (id: string) => {
    setViewState({ type: 'activity_detail', id });
  };

  const navigateToStay = (id: string) => {
    setViewState({ type: 'stay_detail', id });
  };

  const goBackToTabs = () => {
    // Basic history: go back to the relevant tab
    if (viewState.type === 'activity_detail') {
        setViewState({ type: 'tab', tab: 'activities' });
    } else if (viewState.type === 'stay_detail') {
        setViewState({ type: 'tab', tab: 'stay' });
    } else {
        setViewState({ type: 'tab', tab: 'activities' });
    }
  };

  // Render logic based on State
  const renderContent = () => {
    switch (viewState.type) {
      case 'activity_detail':
        const activity = activities.find(a => a.id === viewState.id);
        if (!activity) return null;
        return <ActivityDetail activity={activity} onBack={goBackToTabs} />;

      case 'stay_detail':
        const stay = stays.find(s => s.id === viewState.id);
        if (!stay) return null;
        return <StayDetail stay={stay} onBack={goBackToTabs} />;

      case 'publish_activity_form':
        return <PublishActivityForm onBack={() => setViewState({ type: 'publish_menu' })} />;

      case 'publish_post_form':
        return <PublishPostForm onBack={() => setViewState({ type: 'publish_menu' })} />;

      case 'tab':
      case 'publish_menu': // The menu renders ON TOP of the current tab (see below), but we still render the base tab
        switch ((viewState as any).tab || 'activities') { // Fallback for when in publish_menu state, we probably want to see the last tab, but for simplicity let's default to activities or store last tab.
           // Actually, let's keep it simple: if in publish_menu, we don't render a tab page underneath necessarily, 
           // but normally modals overlay. For this specific request, full page transitions are cleaner for the forms.
           // However, the menu itself looks good as an overlay.
           // Let's assume we render the 'activities' tab as background if 'publish_menu' is active but we don't have "last tab" state here.
           // Let's just fix the logic:
        }
        // Helper to get current active tab for the bottom nav
        const currentTab = viewState.type === 'tab' ? viewState.tab : 'activities'; 
        
        // Render the active tab page
        let pageContent;
        if (currentTab === 'square') pageContent = <SquarePage />;
        else if (currentTab === 'activities') pageContent = <ActivitiesPage onActivityClick={navigateToActivity} />;
        else if (currentTab === 'stay') pageContent = <StayPage onStayClick={navigateToStay} />;
        else if (currentTab === 'profile') pageContent = <ProfilePage />;
        
        return (
            <>
                {pageContent}
                <BottomNav activeTab={currentTab} onTabChange={handleTabChange} />
                
                {/* Publish Menu Overlay */}
                {viewState.type === 'publish_menu' && (
                    <PublishMenu 
                        onClose={() => setViewState({ type: 'tab', tab: 'activities' })}
                        onSelectActivity={() => setViewState({ type: 'publish_activity_form' })}
                        onSelectPost={() => setViewState({ type: 'publish_post_form' })}
                    />
                )}
            </>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-stone-200 flex items-center justify-center font-sans">
      {/* Mobile Simulator Container */}
      <div className="w-full max-w-md h-[100dvh] bg-stone-50 relative overflow-y-auto no-scrollbar shadow-2xl overflow-x-hidden border-x-2 border-black">
        {renderContent()}
      </div>
    </div>
  );
};

export default App;