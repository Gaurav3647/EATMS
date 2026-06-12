using EATMS.Application.DTOs.TaskDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EATMS.Application.Interfaces
{
    public interface ITaskService
    {
        Task<IEnumerable<TaskDto>> GetAllTasksAsync();

        Task<TaskDto> GetTaskByIdAsync(int id);

        Task CreateTaskAsync(CreateTaskDto dto);

        Task UpdateTaskAsync(int id, CreateTaskDto dto);

        Task DeleteTaskAsync(int id);
    }
}
