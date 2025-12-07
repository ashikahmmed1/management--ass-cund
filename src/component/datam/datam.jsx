import React from 'react';

const datam = () => {
    return (
        <div className={`flex flex-col items-center justify-center gap-6 p-6 rounded-lg shadow-sm bg-white/60 dark:bg-slate-800/60 text-slate-800 dark:text-slate-100`}>
            {/* Simple SVG illustration — lightweight and dependency-free */}
            <svg
                width="96"
                height="96"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="opacity-90"
            >
                <rect x="2" y="6" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none" />
                <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 3h10v2H7z" fill="currentColor" />
            </svg>


            <div className="text-center">
                <h3 className="text-lg font-semibold">You don’t have any transactions yet.</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Add your first transaction to start tracking your expenses and income.</p>
            </div>


            <div className="flex gap-3">
                <a
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-orange-400 hover:bg-primary text-white text-sm font-medium shadow-sm focus:outline-none cursor-pointer"
                    href='/add-transaction'
                >
                    {/* Plus icon (inline SVG) */}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Add transaction
                </a>


                <button
                    onClick={() => window.location.reload()}
                    className="inline-flex cursor-pointer items-center gap-2 px-4 py-2 rounded-md border border-primary dark:border-slate-700 bg-transparent text-sm text-primary dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700"
                >
                    Refresh
                </button>
            </div>
        </div>
    );
};

export default datam;