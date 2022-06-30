import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";
import { HomePage } from "./components/Home.page";
import { RQSuperHeroes } from "./components/RQSuperHeroes.page";
import { SuperHeroes } from "./components/SuperHeroes.page";
import { CallSuperHeros } from "./components/CallSuperHeros.page";
import { SuperHero } from "./components/SuperHero.page";
import { ParallelQueries } from "./components/ParallelQueries";
import { DynamicUseQuery } from "./components/DynamicUseQuery.page";
import { DependentQueries } from "./components/DependentQueries.page";
import { PaginationPage } from "./components/PaginationPage.page";
import { InfiniteQuery } from "./components/InfiniteQuery.page";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/on-button-click">On Button Click</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
              <li>
                <Link to="/pagination">Pagination</Link>
              </li>
              <li>
                <Link to="/infinite-query">Infinite Query</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/dependent-query"
              element={
                <DependentQueries email="tejashree.Surve@joshsoftware.com" />
              }
            />
            <Route
              path="/dynamic-heroes"
              element={<DynamicUseQuery heroIds={[1, 3]} />}
            />

            <Route path="/infinite-query" element={<InfiniteQuery />} />

            <Route path="/pagination" element={<PaginationPage />} />

            <Route path="/parallel-queries" element={<ParallelQueries />} />

            <Route path="/super-hero/:heroId" element={<SuperHero />} />

            <Route path="/super-heroes" element={<SuperHeroes />} />

            <Route path="/on-button-click" element={<CallSuperHeros />} />

            <Route path="/rq-super-heroes" element={<RQSuperHeroes />} />

            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="top-right" />
    </QueryClientProvider>
  );
}

export default App;
