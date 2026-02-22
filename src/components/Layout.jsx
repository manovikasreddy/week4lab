const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center p-6">
      {children}
    </div>
  );
};

export default Layout;
