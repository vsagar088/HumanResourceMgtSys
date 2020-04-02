using System;
using System.IO;
using System.Data;
using System.Data.SqlClient;
using System.Collections;
using System.Configuration;
using System.Web;

/// <summary>
/// Summary description for sqlHelper
/// </summary>
public class SqlHelper
{
    private SqlConnection obj_Connection;
    private SqlDataAdapter obj_DataAdapter;
    private SqlDataReader obj_DataReader;
    private SqlCommand obj_Command;
    private string str_ConnectionString = "";
    private int _userId;
    public String ConStr = System.Configuration.ConfigurationManager.ConnectionStrings["Default"].ConnectionString;


    public int userId
    {
        get
        {
            return _userId;
        }
        set
        {
            _userId = value;
        }
    }
    public SqlHelper()
    {
        OpenConnection();
    }
    public SqlHelper(string strConnString)
    {
        OpenConnection(strConnString);
    }
    ~SqlHelper()
    {
        closeConnection();
    }

    public SqlConnection ActiveConnection
    {
        get
        {
            if (obj_Connection == null)
            {
                if (str_ConnectionString.Trim() == "")
                {
                    OpenConnection();
                }
                else
                {
                    OpenConnection(str_ConnectionString);
                }
            }
            return obj_Connection;
        }
    }

    public string ConnectionString
    {
        get
        {
            return str_ConnectionString;
        }
        set
        {
            str_ConnectionString = value;
        }
    }


    //*********************************************** Taken From Old Sql Helper Start ***********************************************//

    public DataTable GetDataTable(String Query)
    {
        return GetDataTable(Query, null, CommandType.Text);
    }
    public DataTable GetDataTable(String Query, CommandType cmdType)
    {
        return GetDataTable(Query, null, cmdType);
    }

    /// <summary>
    /// It Will Return DataTable Based on Query
    /// </summary>
    /// <param name="Query">String Type Parameter</param>
    /// <param name="paramArr">SqlParameter Array</param>
    /// <returns>DataTable Object</returns>
    public DataTable GetDataTable(String Query, SqlParameter[] paramArr, CommandType cmdType)
    {
        SqlDataAdapter da = new SqlDataAdapter(Query, ConStr);
        if (paramArr != null)
            da.SelectCommand.Parameters.AddRange(paramArr);
        da.SelectCommand.CommandType = cmdType;
        DataSet ds = new DataSet();
        da.Fill(ds);
        return ds.Tables[0];
    }


    public string convertdateMMDDYYYY(string purdate)
    {
        string day = null;
        string mon = null;
        string yr = null;
        string date1 = null;
        string[] datedata = null;
        int index = purdate.IndexOf('-');
        if (index < 0)
        {
            datedata = purdate.Split('/');
        }
        else if (index > 0)
        {
            datedata = purdate.Split('-');
        }

        mon = datedata[1];
        day = datedata[0];
        yr = datedata[2];
        date1 = mon + "-" + day + "-" + yr;
        return date1;
    }


    public string convertdateDDMMYYYY(string dateDDMMYYYY)
    {
        string day = null;
        string mon = null;
        string yr = null;
       
        string date1 = null;
        string[] datedata = null;
        int index = dateDDMMYYYY.IndexOf('-');
        if (index < 0)
        {
            datedata = dateDDMMYYYY.Split('/');
        }
        else if (index > 0)
        {
            datedata = dateDDMMYYYY.Split('-');
        }

        day = datedata[0];
        mon = datedata[1];
        yr = datedata[2];
        if (Convert.ToInt16(mon) > 12)
        {
            string temp = day;
            day = mon;
            mon = temp;
        }
        date1 = day + "-" + mon + "-" + yr;
        return date1;
    }

    public string convertdateYYYYMMDD(string dateDDMMYYYY)
    {
        string day = null;
        string mon = null;
        string yr = null;

        string date1 = null;
        string[] datedata = null;
        int index = dateDDMMYYYY.IndexOf('-');
        if (index < 0)
        {
            datedata = dateDDMMYYYY.Split('/');
        }
        else if (index > 0)
        {
            datedata = dateDDMMYYYY.Split('-');
        }

        day = datedata[0];
        mon = datedata[1];
        yr = datedata[2];
        if (Convert.ToInt16(mon) > 12)
        {
            string temp = day;
            day = mon;
            mon = temp;
        }
        date1 = yr + "-" + mon + "-" + day;
        return date1;
    }

    //*********************************************** Taken From Old Sql Helper End ***********************************************//

    //public DataTable getDataTable(string strSQLStatement)
    //{
    //    DataTable obj_DataSet = new DataTable();
    //    obj_DataAdapter = new SqlDataAdapter(strSQLStatement, ActiveConnection);
    //    obj_DataAdapter.Fill(obj_DataSet);
    //    return obj_DataSet;
    //}

    public void insertValIntoTable(string tablename, string[] columnNames, object[] value)
    {
        int size = columnNames.Length;
        string qry = "insert into " + tablename + " (";
        string qry2 = "";
        for (int i = 0; i < size; i++)
        {
            qry2 += columnNames[i].Trim() + ",";
        }
        qry += qry2.Substring(0, qry2.Length - 1) + ") values (";
        qry2 = "";
        for (int i = 0; i < size; i++)
        {
            qry2 += "@" + columnNames[i].Trim() + ",";
        }
        qry += qry2.Substring(0, qry2.Length - 1) + ") ";
        obj_Command = new SqlCommand(qry, ActiveConnection);
        obj_Command.Parameters.Clear();
        for (int i = 0; i < size; i++)
        {
            SqlParameter p = new SqlParameter();
            p.ParameterName = "@" + columnNames[i].Trim();
            p.Value = (value[i] == null) ? DBNull.Value : value[i];
            obj_Command.Parameters.Add(p);
        }
        obj_Command.ExecuteNonQuery();
        closeConnection();
    }


    //public void insertValIntoTableGetId(string p, string[] cols, object[] vals, long id)
    //{
    //    throw new NotImplementedException();
    //}


    public void insertValIntoTableGetId(string tablename, string[] columnNames, object[] value, ref Int64 id)
    {
        int size = columnNames.Length;
        string qry = "insert into " + tablename + " (";
        string qry2 = "";
        for (int i = 0; i < size; i++)
        {
            qry2 += columnNames[i] + ",";
        }
        qry += qry2.Substring(0, qry2.Length - 1) + ") values (";
        qry2 = "";
        for (int i = 0; i < size; i++)
        {
            qry2 += "@" + columnNames[i] + ",";
        }
        qry += qry2.Substring(0, qry2.Length - 1) + ") ";
        obj_Command = new SqlCommand(qry + ";SELECT SCOPE_IDENTITY()", ActiveConnection);
        obj_Command.Parameters.Clear();
        for (int i = 0; i < size; i++)
        {
            SqlParameter p = new SqlParameter();
            p.ParameterName = "@" + columnNames[i];
            p.Value = (value[i] == null) ? DBNull.Value : value[i];
            obj_Command.Parameters.Add(p);
        }
        id = Convert.ToInt64(obj_Command.ExecuteScalar());
        closeConnection();
    }

    public void updateValIntoTable(string tablename, string[] columnNames, object[] value, string condColumnName, object condValue)
    {
        int size = columnNames.Length;
        string qry = "update " + tablename + "  set ";
        string qry2 = "";
        for (int i = 0; i < size; i++)
        {
            qry2 += columnNames[i] + " = @" + columnNames[i] + ",";
        }
        qry += qry2.Substring(0, qry2.Length - 1) + "  where " + condColumnName + " = @" + condColumnName;
        obj_Command = new SqlCommand(qry, ActiveConnection);
        obj_Command.Parameters.Clear();
        for (int i = 0; i < size; i++)
        {
            SqlParameter p = new SqlParameter();
            p.ParameterName = "@" + columnNames[i];
            p.Value = (value[i] == null) ? DBNull.Value : value[i];
            obj_Command.Parameters.Add(p);
        }
        SqlParameter p1 = new SqlParameter();
        p1.ParameterName = "@" + condColumnName;
        p1.Value = condValue;
        obj_Command.Parameters.Add(p1);
        obj_Command.ExecuteNonQuery();
        closeConnection();
    }


    /***********  try **************/

    public void updateValIntoTable2Cond(string tablename, string[] columnNames, object[] value, string condColumnName, object condValue, string condColumnName2, object condValue2)
    {
        int size = columnNames.Length;
        string qry = "update " + tablename + "  set ";
        string qry2 = "";

        for (int i = 0; i < size; i++)
        {
            qry2 += columnNames[i] + " = @" + columnNames[i] + ",";
        }
        qry += qry2.Substring(0, qry2.Length - 1) + "  where " + condColumnName + " = @" + condColumnName + " and " + condColumnName2 + " = @" + condColumnName2; ;
        obj_Command = new SqlCommand(qry, ActiveConnection);
        obj_Command.Parameters.Clear();
        for (int i = 0; i < size; i++)
        {
            SqlParameter p = new SqlParameter();
            p.ParameterName = "@" + columnNames[i];
            p.Value = (value[i] == null) ? DBNull.Value : value[i];
            obj_Command.Parameters.Add(p);
        }
        SqlParameter p1 = new SqlParameter();
        p1.ParameterName = "@" + condColumnName;
        p1.Value = condValue;
        obj_Command.Parameters.Add(p1);
        SqlParameter p2 = new SqlParameter();
        p2.ParameterName = "@" + condColumnName2;
        p2.Value = condValue2;
        obj_Command.Parameters.Add(p2);
        obj_Command.ExecuteNonQuery();
        closeConnection();
    }

    public void updateValIntoTable3Cond(string tablename, string[] columnNames, object[] value, string condColumnName, object condValue, string condColumnName2, object condValue2, string condColumnName3, object condValue3)
    {
        int size = columnNames.Length;
        string qry = "update " + tablename + "  set ";
        string qry2 = "";

        for (int i = 0; i < size; i++)
        {
            qry2 += columnNames[i] + " = @" + columnNames[i] + ",";
        }
        qry += qry2.Substring(0, qry2.Length - 1) + "  where " + condColumnName + " = @" + condColumnName + " and " + condColumnName2 + " = @" + condColumnName2 + " and " + condColumnName3 + " = @" + condColumnName3;
        obj_Command = new SqlCommand(qry, ActiveConnection);
        obj_Command.Parameters.Clear();
        for (int i = 0; i < size; i++)
        {
            SqlParameter p = new SqlParameter();
            p.ParameterName = "@" + columnNames[i];
            p.Value = (value[i] == null) ? DBNull.Value : value[i];
            obj_Command.Parameters.Add(p);
        }
        SqlParameter p1 = new SqlParameter();
        p1.ParameterName = "@" + condColumnName;
        p1.Value = condValue;
        obj_Command.Parameters.Add(p1);

        SqlParameter p2 = new SqlParameter();
        p2.ParameterName = "@" + condColumnName2;
        p2.Value = condValue2;
        obj_Command.Parameters.Add(p2);

        SqlParameter p3 = new SqlParameter();
        p3.ParameterName = "@" + condColumnName3;
        p3.Value = condValue3;
        obj_Command.Parameters.Add(p3);

        obj_Command.ExecuteNonQuery();
        closeConnection();
    }


    /***********  try end **************/

    public int ExecuteNonQuery(string strSQLStatement)
    {
        if (obj_DataReader != null)
        {
            obj_DataReader.Close();
        }
        SqlCommand obj_Command = new SqlCommand();
        obj_Command.CommandText = strSQLStatement;
        obj_Command.CommandTimeout = 10000;
        obj_Command.Connection = ActiveConnection;
        return obj_Command.ExecuteNonQuery();
    }

    public string ExecuteScaler(string strSQLStatement)
    {
        try
        {
            SqlCommand obj_Command = new SqlCommand();
            obj_Command.CommandText = strSQLStatement;
            obj_Command.CommandTimeout = 10000;
            obj_Command.Connection = ActiveConnection;
            return obj_Command.ExecuteScalar().ToString();
        }
        catch
        {
            return null;
        }
    }


    public string ExecuteScalerColVal(string tablename, string columnNames, object value, string colsValueToSelect, string condition)
    {
        try
        {
            int size = columnNames.Length;
            string qry = "select " + colsValueToSelect + " from  " + tablename + " where  " + columnNames + "=@" + columnNames + " " + condition;
            obj_Command = new SqlCommand(qry, ActiveConnection);
            obj_Command.Parameters.Clear();

            SqlParameter p = new SqlParameter();
            p.ParameterName = "@" + columnNames;
            p.Value = value;
            obj_Command.Parameters.Add(p);
            string val = obj_Command.ExecuteScalar().ToString();
            closeConnection();
            return val;
        }
        catch (Exception)
        {
            return "";
        }
    }

    public string ExecuteScalerColsVals(string tablename, string[] columnNames, object[] value, string colsValueToSelect)
    {
        try
        {
            int size = columnNames.Length;
            string qry = "select " + colsValueToSelect + " from  " + tablename + " where   ";
            string qry2 = "";
            for (int i = 0; i < size; i++)
            {
                qry2 += columnNames[i] + " = @" + columnNames[i] + " and ";
            }
            qry += qry2.Substring(0, qry2.Length - 4);
            obj_Command = new SqlCommand(qry, ActiveConnection);
            obj_Command.Parameters.Clear();
            for (int i = 0; i < size; i++)
            {
                SqlParameter p = new SqlParameter();
                p.ParameterName = "@" + columnNames[i];
                p.Value = value[i];
                obj_Command.Parameters.Add(p);
            }
            string val = obj_Command.ExecuteScalar().ToString();
            closeConnection();
            return val;
        }
        catch (Exception)
        {
            return "";
        }
    }

    public bool BulkImportDataTable(DataTable SourceTable, string destinationTableName, string[] sourceCols, string[] destinationCols)
    {
        try
        {
            SqlBulkCopy sbc = new SqlBulkCopy(ConfigurationManager.ConnectionStrings["Default"].ToString(), SqlBulkCopyOptions.KeepIdentity);
            sbc.DestinationTableName = destinationTableName;
            int size = sourceCols.Length;
            for (int i = 0; i < size; i++)
            {
                sbc.ColumnMappings.Add(sourceCols[i], destinationCols[i]);
            }
            sbc.WriteToServer(SourceTable);
            return true;
        }
        catch (Exception)
        {
            return false;
        }
    }

    public void closeConnection()
    {
        try
        {
            obj_Connection.Close();
            obj_Connection = null;
        }
        catch
        {
        }
    }

    public SqlDataReader GetReader(string strSQLStatement)
    {
        if (obj_DataReader != null)
        {
            obj_DataReader.Close();
        }
        SqlCommand obj_Command = new SqlCommand();
        obj_Command.CommandText = strSQLStatement;
        obj_Command.Connection = ActiveConnection;
        obj_Command.CommandTimeout = 10000;

        obj_DataReader = obj_Command.ExecuteReader();
        return obj_DataReader;
    }

    public DataSet getDataSet(string strSQLStatement)
    {
        DataSet obj_DataSet = new DataSet();
        obj_DataAdapter = new SqlDataAdapter(strSQLStatement, ActiveConnection);
        obj_DataAdapter.Fill(obj_DataSet);
        return obj_DataSet;
    }

    //public DataTable getDataTable(string strSQLStatement)
    //{
    //    DataTable obj_DataSet = new DataTable();
    //    obj_DataAdapter = new SqlDataAdapter(strSQLStatement, ActiveConnection);
    //    obj_DataAdapter.Fill(obj_DataSet);
    //    return obj_DataSet;
    //}

    public DataRow getDataRow(string strSQLStatement)
    {
        DataTable obj_DataSet = new DataTable();
        obj_DataAdapter = new SqlDataAdapter(strSQLStatement, ActiveConnection);
        obj_DataAdapter.Fill(obj_DataSet);
        return obj_DataSet.Rows[0];
    }

    public DataSet sp_GetDataSet(string Sp_Name, SqlParameter[] parameters)
    {
        DataSet obj_DataSet = new DataSet();
        obj_Command = new SqlCommand(Sp_Name, ActiveConnection);
        obj_DataAdapter = new SqlDataAdapter(obj_Command);
        for (int x = 0; x < parameters.Length; x++)
        {
            obj_Command.Parameters.Add(parameters.GetValue(x));
        }
        obj_DataAdapter.SelectCommand.CommandType = CommandType.StoredProcedure;
        obj_DataAdapter.Fill(obj_DataSet);
        return obj_DataSet;
    }

    public SqlParameter[] createParam(string[] paramName, object[] value)
    {
        int size = paramName.Length;
        SqlParameter[] param = new SqlParameter[size];
        for (int i = 0; i < size; i++)
        {
            param[i] = new SqlParameter(paramName[i], value[i]);
        }
        return param;
    }

    public DataTable sp_GetDataTableNoPara(string Sp_Name)
    {
        DataTable obj_DataSet = new DataTable();
        obj_Command = new SqlCommand(Sp_Name, ActiveConnection);
        obj_DataAdapter = new SqlDataAdapter(obj_Command);
        obj_DataAdapter.SelectCommand.CommandType = CommandType.StoredProcedure;
        obj_DataAdapter.Fill(obj_DataSet);
        return obj_DataSet;
    }


    public DataTable sp_GetDataTable(string Sp_Name, SqlParameter[] parameters)
    {
        DataTable obj_DataSet = new DataTable();
        obj_Command = new SqlCommand(Sp_Name, ActiveConnection);
        obj_DataAdapter = new SqlDataAdapter(obj_Command);
        for (int x = 0; x < parameters.Length; x++)
        {
            obj_Command.Parameters.Add(parameters.GetValue(x));
        }
        obj_DataAdapter.SelectCommand.CommandType = CommandType.StoredProcedure;
        obj_DataAdapter.Fill(obj_DataSet);
        return obj_DataSet;
    }


    public DataTable sp_GetDataTable(string Sp_Name, string[] columnNames, object[] value)
    {

        DataTable obj_DataSet = new DataTable();
        obj_Command = new SqlCommand(Sp_Name, ActiveConnection);
        obj_DataAdapter = new SqlDataAdapter(obj_Command);
        for (int x = 0; x < columnNames.Length; x++)
        {
            obj_Command.Parameters.Add(new SqlParameter(columnNames[x], value[x]));
        }
        obj_DataAdapter.SelectCommand.CommandType = CommandType.StoredProcedure;
        obj_DataAdapter.Fill(obj_DataSet);
        return obj_DataSet;
    }


    public void sp_RunProcRegistration(string Sp_Name, SqlParameter[] parameters, out int returnID)
    {
        obj_Command = new SqlCommand(Sp_Name, ActiveConnection);
        for (int x = 0; x < parameters.Length; x++)
        {
            obj_Command.Parameters.Add(parameters.GetValue(x));
        }
        obj_Command.Parameters.AddWithValue("@returnID", 0).Direction = ParameterDirection.Output;
        obj_Command.CommandType = CommandType.StoredProcedure;
        obj_Command.ExecuteNonQuery();
        returnID = int.Parse(obj_Command.Parameters["@returnID"].Value.ToString());
    }
    public DataTable sp_GetDataTableNoParam(string Sp_Name)
    {
        DataTable obj_DataSet = new DataTable();
        obj_Command = new SqlCommand(Sp_Name, ActiveConnection);
        obj_DataAdapter = new SqlDataAdapter(obj_Command);
        obj_DataAdapter.SelectCommand.CommandType = CommandType.StoredProcedure;
        obj_DataAdapter.Fill(obj_DataSet);
        return obj_DataSet;
    }


    public DataSet sp_GetDataSetNoParam(string Sp_Name)
    {
        DataSet obj_DataSet = new DataSet();
        obj_Command = new SqlCommand(Sp_Name, ActiveConnection);
        obj_DataAdapter = new SqlDataAdapter(obj_Command);
        obj_DataAdapter.SelectCommand.CommandType = CommandType.StoredProcedure;
        obj_DataAdapter.Fill(obj_DataSet);
        return obj_DataSet;
    }


    public DataSet sp_GetDataSet(string Sp_Name, SqlParameter[] parameters, out object heading)
    {
        DataSet obj_DataSet = new DataSet();
        obj_Command = new SqlCommand(Sp_Name, ActiveConnection);
        obj_DataAdapter = new SqlDataAdapter(obj_Command);
        for (int x = 0; x < parameters.Length; x++)
        {
            obj_Command.Parameters.Add(parameters.GetValue(x));
        }
        // obj_Command.Parameters.AddWithValue("@heading", "aaaaaaaaaaaaaaaaaaaaaaaaaa").Direction = ParameterDirection.InputOutput;
        obj_DataAdapter.SelectCommand.CommandType = CommandType.StoredProcedure;
        obj_DataAdapter.Fill(obj_DataSet);
        heading = (object)(obj_Command.Parameters["@return"].Value.ToString());
        return obj_DataSet;
    }



    //public void sp_ExexOutput(string Sp_Name, SqlParameter[] parameters,out string amount)
    //{

    //   obj_Command = new SqlCommand(Sp_Name, ActiveConnection);

    //    for (int x = 0; x < parameters.Length; x++)
    //    {
    //        obj_Command.Parameters.Add(parameters.GetValue(x));
    //    }
    //    // obj_Command.Parameters.AddWithValue("@totalAmt", totalAmt);
    //    obj_Command.Parameters.AddWithValue("@couponAmount", "0$").Direction = ParameterDirection.Output;
    //    obj_Command.CommandType = CommandType.StoredProcedure;
    //    obj_Command.ExecuteNonQuery();
    //    amount = (obj_Command.Parameters["@couponAmount"].Value.ToString());

    //}

    public DataSet sp_ExexOutput(string Sp_Name, SqlParameter[] parameters, out string amount)
    {
        DataSet obj_DataSet = new DataSet();
        obj_Command = new SqlCommand(Sp_Name, ActiveConnection);
        obj_DataAdapter = new SqlDataAdapter(obj_Command);
        for (int x = 0; x < parameters.Length; x++)
        {
            obj_Command.Parameters.Add(parameters.GetValue(x));
        }
        // obj_Command.Parameters.AddWithValue("@totalAmt", totalAmt);
        obj_Command.Parameters.AddWithValue("@couponAmount", "0$").Direction = ParameterDirection.Output;
        obj_DataAdapter.SelectCommand.CommandType = CommandType.StoredProcedure;
        obj_DataAdapter.Fill(obj_DataSet);
        amount = (obj_Command.Parameters["@couponAmount"].Value.ToString());
        return obj_DataSet;
    }


    public DataSet sp_GetDataSetOutput(string Sp_Name, SqlParameter[] parameters, out float totalAmt)
    {
        DataSet obj_DataSet = new DataSet();
        obj_Command = new SqlCommand(Sp_Name, ActiveConnection);
        obj_DataAdapter = new SqlDataAdapter(obj_Command);
        for (int x = 0; x < parameters.Length; x++)
        {
            obj_Command.Parameters.Add(parameters.GetValue(x));
        }
        // obj_Command.Parameters.AddWithValue("@totalAmt", totalAmt);
        obj_Command.Parameters.AddWithValue("@totalAmt", 0).Direction = ParameterDirection.Output;
        obj_DataAdapter.SelectCommand.CommandType = CommandType.StoredProcedure;
        obj_DataAdapter.Fill(obj_DataSet);
        totalAmt = float.Parse(obj_Command.Parameters["@totalAmt"].Value.ToString());
        return obj_DataSet;
    }


    public DataSet sp_GetDataSetOutput2(string Sp_Name, SqlParameter[] parameters, out int count)
    {
        DataSet obj_DataSet = new DataSet();
        obj_Command = new SqlCommand(Sp_Name, ActiveConnection);
        obj_DataAdapter = new SqlDataAdapter(obj_Command);
        for (int x = 0; x < parameters.Length; x++)
        {
            obj_Command.Parameters.Add(parameters.GetValue(x));
        }
        obj_DataAdapter.SelectCommand.CommandType = CommandType.StoredProcedure;
        obj_DataAdapter.Fill(obj_DataSet);
        count = int.Parse(obj_Command.Parameters["@count"].Value.ToString());
        return obj_DataSet;
    }
    public SqlDataAdapter sp_Getda(string Sp_Name, SqlParameter[] parameters)
    {
        DataSet obj_DataSet = new DataSet();
        obj_Command = new SqlCommand(Sp_Name, ActiveConnection);
        obj_DataAdapter = new SqlDataAdapter(obj_Command);
        for (int x = 0; x < parameters.Length; x++)
        {
            obj_Command.Parameters.Add(parameters.GetValue(x));
        }
        obj_DataAdapter.SelectCommand.CommandType = CommandType.StoredProcedure;
        return obj_DataAdapter;
    }

    public SqlDataAdapter sp_Getda_noparam(string Sp_Name)
    {
        DataSet obj_DataSet = new DataSet();
        obj_Command = new SqlCommand(Sp_Name, ActiveConnection);
        obj_DataAdapter = new SqlDataAdapter(obj_Command);

        obj_DataAdapter.SelectCommand.CommandType = CommandType.StoredProcedure;
        return obj_DataAdapter;
    }


    public DataSet sp_GetDataSet(string Sp_Name)
    {
        SqlCommand Comm = new SqlCommand(Sp_Name);
        DataSet obj_DataSet = new DataSet();

        Comm.Connection = ActiveConnection;
        Comm.CommandType = CommandType.StoredProcedure;

        SqlDataAdapter da = new SqlDataAdapter(Comm);
        da.Fill(obj_DataSet);
        return obj_DataSet;
    }
    public SqlDataAdapter GetDA(string Sp_name)
    {
        SqlCommand Comm = new SqlCommand(Sp_name);
        DataSet obj_DataSet = new DataSet();

        Comm.Connection = ActiveConnection;
        Comm.CommandType = CommandType.StoredProcedure;

        SqlDataAdapter da = new SqlDataAdapter(Comm);
        return da;
    }

    public void sp_RunProc(string Sp_Name, SqlParameter[] parameters)
    {
        obj_Command = new SqlCommand(Sp_Name, ActiveConnection);
        for (int x = 0; x < parameters.Length; x++)
        {
            obj_Command.Parameters.Add(parameters.GetValue(x));
        }
        obj_Command.CommandType = CommandType.StoredProcedure;
        obj_Command.ExecuteNonQuery();
    }

    public void sp_RunProcWithOutput(string Sp_Name, SqlParameter[] parameters, out int returnID)
    {
        obj_Command = new SqlCommand(Sp_Name, ActiveConnection);
        for (int x = 0; x < parameters.Length; x++)
        {
            obj_Command.Parameters.Add(parameters.GetValue(x));
        }

        obj_Command.Parameters.AddWithValue("@bID", 0).Direction = ParameterDirection.Output;
        obj_Command.CommandType = CommandType.StoredProcedure;
        obj_Command.ExecuteNonQuery();
        returnID = int.Parse(obj_Command.Parameters["@bID"].Value.ToString());
    }

    public int sp_RunProcWeb(string Sp_Name, SqlParameter[] parameters)
    {
        obj_Command = new SqlCommand(Sp_Name, ActiveConnection);
        for (int x = 0; x < parameters.Length; x++)
        {
            obj_Command.Parameters.Add(parameters.GetValue(x));
        }
        obj_Command.CommandType = CommandType.StoredProcedure;
        return int.Parse(obj_Command.ExecuteNonQuery().ToString());
    }
    public string sp_RunProcOutput(string Sp_Name, SqlParameter[] parameters)
    {
        obj_Command = new SqlCommand(Sp_Name, ActiveConnection);
        for (int x = 0; x < parameters.Length; x++)
        {
            obj_Command.Parameters.Add(parameters.GetValue(x));
        }
        obj_Command.CommandType = CommandType.StoredProcedure;
        return obj_Command.ExecuteScalar().ToString();

    }

    public void OpenConnection()
    {
        try
        {
            string strConnection = System.Configuration.ConfigurationManager.ConnectionStrings["Default"].ToString();
            OpenConnection(strConnection);
        }
        catch (Exception)
        { }
    }

    public void OpenConnection(string ConnectionString)
    {
        obj_Connection = new SqlConnection();
        if (obj_Connection.State == ConnectionState.Closed)
        {
            obj_Connection.ConnectionString = ConnectionString;
            obj_Connection.Open();
        }
    }


}
