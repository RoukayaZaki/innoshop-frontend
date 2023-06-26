import "./../../assets/css/filters.css"

const Filters = () => {
    return (
        <div className="sidebar">
            <h2>Filters</h2>
          
            <h3>Date</h3>
            <ul>
              <li>
                <label>
                  <input type="checkbox" name="datefilter" value="Newest First" /> Newest First
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="datefilter" value="Newest Last" /> Newest Last
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="datefilter" value="Cheapest First" /> Cheapest First
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="datefilter" value="Cheapest Last" /> Cheapest Last
                </label>
              </li>
            </ul>
          
            <h3>Price Range</h3>
            <div class="price-range">
              <select name="min-price">
                <option value="">Min</option>
                <option value="0">0 R</option>
                <option value="50">500 R</option>
                <option value="100">1000 R</option>
              </select>
              <select name="max-price">
                <option value="">Max</option>
                <option value="0">0 R</option>
                <option value="50">500 R</option>
                <option value="100">1000 R</option>
              </select>
            </div>
            <br />
        </div>
    );
}

export default Filters;