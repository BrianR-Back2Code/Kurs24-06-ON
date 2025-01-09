### Steps to Launch and Monitor with Loki, Promtail, and Grafana

1. **Launch the Express Server**  
   Start your Express server on the local machine.  
   Verify it's running by accessing:  
   ```bash
   curl http://localhost:5001/
   ```

2. **Navigate to the Loki Setup Directory**  
   Change to the directory containing the Loki configuration:  
   ```bash
   cd ./loki
   ```

3. **Start Loki, Promtail, and Grafana with Docker Compose**  
   Launch Loki, Promtail, and Grafana using Docker Compose:  
   ```bash
   docker compose -f docker-compose.yaml up
   ```

4. **Check if Promtail and Loki are Ready**  
   - To check if **Promtail** is running and ready, visit:  
     - **Metrics**: [http://localhost:9080/metrics](http://localhost:9080/metrics)  
     - **Ready status**: [http://localhost:9080/ready](http://localhost:9080/ready)  
   - To check if **Loki** is running and ready, visit:  
     - **Metrics**: [http://localhost:3100/metrics](http://localhost:3100/metrics)  
     - **Ready status**: [http://localhost:3100/ready](http://localhost:3100/ready)  

5. **Access Grafana**  
   Open your browser and navigate to:  
   [http://localhost:3000](http://localhost:3000)  
   Use the following credentials to log in:  
   - **Username**: admin  
   - **Password**: admin  

6. **Configure Loki as a Data Source**  
   - In Grafana, go to **Configuration > Data Sources**.  
   - Add a new data source for Loki with the URL:  
     ```text
     http://loki:3100
     ```

7. **Explore and Visualize Logs**  
   - Navigate to the **Explore** section in Grafana.  
   - Create a chart of the HTTP requests logged by your Express server.

8. **Add Filters to Visualize Errors**  
   - Add error filters to identify and visualize specific error patterns in your logs.  
   - Update the chart to include these filters for better analysis.

9. **Generate More Data**  
   - Execute additional requests to your Express server to generate more logs:  
     ```bash
     curl http://localhost:5001/*
     ```

10. **Monitor Logs in Real-Time**  
    - Return to Grafana to see the real-time log data and charts updating dynamically.

11. **Enjoy!**  
    Use the dashboards and log analytics to monitor and gain insights into your application.

